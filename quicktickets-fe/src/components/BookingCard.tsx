import React from "react";
import "./Card.css";

interface BookingCardProps {
  booking: any;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
  return (
    <div className="card">
      <h3>Booking ID: {booking.id}</h3>
      <p>User: {booking.userName}</p>
      <p>Movie: {booking.movieTitle}</p>
      <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
    </div>
  );
};

export default BookingCard;
