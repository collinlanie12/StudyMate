import React, { useContext, useEffect, useState } from "react";
import Notifications from "react-notifications-menu";
import bell from "../../assets/images/notification-bell-image.png"
import Pusher from "pusher-js";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";
const data = [
  {
    image: "https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png",
    message: 'You missed my math lecture you fucking clown.',
    receivedTime: '12h ago'

  }
]
function NotificationBell() {
  const auth = useContext(AuthContext);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    Notification.requestPermission();
    const pusher = new Pusher('56a1d89602b67d8e72e2', {
      cluster: 'us2'
    });
    console.log(pusher);
    API.Notifications.getAll(auth.authToken)
      .then(response => {
        setNotifications(response.data)
      });
    pusher.connection.bind('connected', function () {
      axios.defaults.headers.common['X-Socket-Id'] = pusher.connection.socket_id;
    })
    const channel = pusher.subscribe('notifications')
    channel.bind('post_added', function (post) {
      API.Notifications.create(auth.authToken, post.content, post.date)
        .then(dataForPost => {
          console.log(dataForPost);
          // data.push({
          //   image: dataForPost.image,
          //   message: dataForPost.message,
          //   receivedTime: dataForPost.atTime
          // })
        });
    })
  }, []);

  // notifications.forEach(notif => {
  //   data.push({
  //     image: notif.image,
  //     message: notif.message,
  //     receivedTime: notif.atTime,
  //   })
  // })


  // console.log(data);

  return <Notifications data={data}
    icon={bell}
  />

};



export default NotificationBell;
