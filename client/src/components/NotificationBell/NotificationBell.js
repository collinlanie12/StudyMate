import React, { useEffect } from "react";
import Notifications from "react-notifications-menu";
import bell from "../../assets/images/notification-bell-image.png"
import Pusher from "pusher-js";
import axios from "axios";


function NotificationBell() {
  const pusher = new Pusher('56a1d89602b67d8e72e2', {
    cluster: 'us2'
  });

  const data = [
    {
      image: "https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png",
      message: 'You missed my math lecture you fucking clown.',
      detailPage: '/events',
      receivedTime: '12h ago'

    }
  ]
  pusher.connection.bind('connected', function () {
    axios.defaults.headers.common['X-Socket-Id'] = pusher.connection.socket_id;
  })

  console.log(pusher);
  Notification.requestPermission();
  pusher.subscribe('notifications')
    .bind('post_added', function (post) {
      data.push({
        image: "https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png",
        message: post.content,
        detailPage: '/events',
        receivedTime: post.date
      })
    })


  return <Notifications data={data}
    icon={bell}
  />

};



export default NotificationBell;
