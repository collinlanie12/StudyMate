import React from "react";
import Notifications from "react-notifications-menu";

const NotificationBell = (props) => {
  const data = [
    {
      image: "https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png",
      message: 'You missed my math lecture.',
      detailPage: '/events',
      receivedTime: '12h ago'

    }
  ]


  return <Notifications data={data}

  />
};



export default NotificationBell;
