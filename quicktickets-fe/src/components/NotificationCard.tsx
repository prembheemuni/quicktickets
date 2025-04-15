import React from "react";
import "./Card.css";

interface NotificationCardProps {
  notification: any;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
}) => {
  return (
    <div className="card">
      <h3>{notification.title}</h3>
      <p>{notification.message}</p>
      <p>Date: {new Date(notification.date).toLocaleString()}</p>
    </div>
  );
};

export default NotificationCard;
