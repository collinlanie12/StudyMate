import React, { useContext, useEffect, useState } from "react";
import Notifications from "react-notifications-menu";
import bell from "../../assets/images/notification-bell-image.png"
import Pusher from "pusher-js";
// import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";
const data = [
  {
    image: "https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png",
    message: 'You missed my math lecture you clown.',
    receivedTime: '12h ago'

  }
]
function NotificationBell() {
  const auth = useContext(AuthContext);

  const [subjects, setSubjects] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    Notification.requestPermission();
    const pusher = new Pusher('56a1d89602b67d8e72e2', {
      cluster: 'us2'
    });
    API.Notifications.getSubjects(auth.authToken)
      .then(response => {
        let subArr = [];
        response.data[0].Subjects.map(e => {
          subArr.push(e.id)
        });
        setSubjects(subArr);

        const promises = subArr.map(sub => (
          API.Notifications.getAll(auth.authToken, sub)
        ))

        Promise.all(promises)
          .then(responses => {
            setNotifications(responses.reduce((result, response) => result.concat(response.data[0].Notifications), []))
          });

      })
    // pusher.connection.bind('connected', function () {
    //   axios.defaults.headers.common['X-Socket-Id'] = pusher.connection.socket_id;
    // })
    const channel = pusher.subscribe('notifications')
    channel.bind('post_added', (post) => {
      API.Notifications.create(auth.authToken, post.content, post.date, post.SubjectId)
        .then(dataForPost => {
          setNotifications(currentNotifications => ([dataForPost.data, ...currentNotifications]));
        });
    });

    return () => {
      channel.unbind();
      pusher.unsubscribe(channel);
    }
  }, []);


  data.length = 0;
  notifications.forEach(notif => {
    data.push({
      image: notif.image,
      message: notif.message,
      receivedTime: notif.atTime,
    })
  })

  return <Notifications data={data}
    icon={bell}
  />

};



export default NotificationBell;
