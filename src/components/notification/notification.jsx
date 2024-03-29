import React from "react";
import { EmptyNotifications } from "../EmptyState/EmptyNotifications";

// Notification Card Function
const NotificationCard = (props) => {
  return (
    <li className="wrapper_list_item">
      <img src="/images/icons/bell-green.svg" alt="" />

      <div className="list_item_text">
        <p className="item_text_label">2 Hour Ago | AJP</p>
        <p className="item_text_content">Practical 15 Assigned</p>
      </div>

      <div className="list_item_actionButtons">
        <button className="btn">
          <img src="/images/icons/cross-red.svg" alt="" />
        </button>
        <button className="btn">
          <img src="/images/icons/tick-green.svg" alt="" />
        </button>
      </div>
    </li>
  );
};

export default function Notification() {
  // eslint-disable-next-line no-unused-vars
  const [notificationsList, setNotificationsList] = React.useState([]);

  return (
    <section className="lyt_notification_wrapper">
      <div className="notification_wrapper_title">
        <h1>Notification</h1>
        <hr />
      </div>
      <div className="notification_wrapper_quickAction">
        <button className="btn">
          <img src="/images/icons/bell-green.svg" alt="" />
        </button>

        <button className="btn">
          <img src="/images/icons/tick-green.svg" alt="" />
          <p>Mark all as read</p>
        </button>
      </div>
      <ul className="notification_wrapper_list">
        {notificationsList.length > 0 ? (
          notificationsList.map((item, key) => {
            return <NotificationCard key={key} />;
          })
        ) : (
          <EmptyNotifications />
        )}
      </ul>
    </section>
  );
}
