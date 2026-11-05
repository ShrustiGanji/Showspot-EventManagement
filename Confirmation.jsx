
import { CheckCircle, Ticket } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {
  const location = useLocation();

  const booking = location.state;

  if (!booking) {
    return (
      <section className="confirmation-section">
        <h2>No booking details found.</h2>
        <Link to="/">Explore Events</Link>
      </section>
    );
  }

  return (
    <section className="confirmation-section">
      <div className="confirmation-card">
        <CheckCircle
          size={65}
          color="#22c55e"
        />

        <h1>Booking Confirmed!</h1>

        <p className="confirmation-message">
          Your demo booking has been successfully created.
        </p>

        <div className="booking-summary">
          <h2>
            <Ticket size={22} />
            Booking Summary
          </h2>

          <div>
            <span>Event</span>
            <strong>{booking.event.title}</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>{booking.event.location}</strong>
          </div>

          <div>
            <span>Event Date</span>
            <strong>{booking.event.date}</strong>
          </div>

          <div>
            <span>Tickets</span>
            <strong>{booking.quantity}</strong>
          </div>

          <div className="summary-total">
            <span>Total Amount</span>
            <strong>₹{booking.totalPrice}</strong>
          </div>
        </div>

        <Link to="/" className="home-btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default Confirmation;
