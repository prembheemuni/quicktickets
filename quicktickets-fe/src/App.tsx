import React, { useEffect, useState } from "react";
import "./App.css";

// Card components
import UserCard from "./components/UserCard";
import MovieCard from "./components/MovieCard";
import PaymentCard from "./components/PaymentCard";
import NotificationCard from "./components/NotificationCard";
import BookingCard from "./components/BookingCard";

const App: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [movies, setMovies] = useState([]);
  const [payments, setPayments] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("users");

  const apiUrls = {
    users: import.meta.env.VITE_USERS_API,
    movies: import.meta.env.VITE_MOVIES_API,
    payments: import.meta.env.VITE_PAYMENTS_API,
    notifications: import.meta.env.VITE_NOTIFICATIONS_API,
    bookings: import.meta.env.VITE_BOOKINGS_API,
  };

  const fetchData = async (type: string) => {
    try {
      const url = apiUrls[type as keyof typeof apiUrls];
      const response = await fetch(url);
      const data = await response.json();
      switch (type) {
        case "users":
          setUsers(data);
          break;
        case "movies":
          setMovies(data);
          break;
        case "payments":
          setPayments(data);
          break;
        case "notifications":
          setNotifications(data);
          break;
        case "bookings":
          setBookings(data);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(`Error fetching ${type}:`, error);
    }
  };

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  const renderData = () => {
    switch (activeTab) {
      case "users":
        return users.map((user, i) => <UserCard key={i} user={user} />);
      case "movies":
        return movies.map((movie, i) => <MovieCard key={i} movie={movie} />);
      case "payments":
        return payments.map((payment, i) => (
          <PaymentCard key={i} payment={payment} />
        ));
      case "notifications":
        return notifications.map((n, i) => (
          <NotificationCard key={i} notification={n} />
        ));
      case "bookings":
        return bookings.map((b, i) => <BookingCard key={i} booking={b} />);
      default:
        return <p>Select a tab</p>;
    }
  };

  return (
    <div className="App">
      <nav>
        {["users", "movies", "payments", "notifications", "bookings"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? "active" : ""}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          )
        )}
      </nav>
      <main>{renderData()}</main>
    </div>
  );
};

export default App;
