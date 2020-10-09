import React from "react";
import Notifications from "react-notifications-menu";
import bell from "../../assets/images/notification-bell-image.png"

const data = [
  {
    image: "https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png",
    message: 'You missed my math lecture you fucking clown.',
    detailPage: '/events',
    receivedTime: '12h ago'

  }
]

const NotificationBell = () => {

  return <Notifications data={data}
    icon={bell}
  />
};



export default NotificationBell;
