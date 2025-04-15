import React from "react";
import "./Card.css";

interface PaymentCardProps {
  payment: any;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ payment }) => {
  return (
    <div className="card">
      <h3>Payment ID: {payment.id}</h3>
      <p>Amount: ${payment.amount}</p>
      <p>Status: {payment.status}</p>
    </div>
  );
};

export default PaymentCard;
