
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import events from "../data/events";
import "./Booking.css";

function Booking({ bookings, setBookings }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!event) {
    return <h2>Event Not Found</h2>;
  }

  const totalPrice = quantity * event.price;

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

function confirmBooking() {
  const newBooking = {
    id: Date.now(),
    eventId: event.id,
    eventTitle: event.title,
    eventDate: event.date,
    location: event.location,
    quantity: quantity,
    totalPrice: totalPrice
  };

  setBookings([...bookings, newBooking]);

  navigate("/confirmation", {
    state: {
      event: event,
      quantity: quantity,
      totalPrice: totalPrice
    }
  });
}

  return (
    <section className="booking-section">
      <Link to={`/event/${event.id}`} className="back-link">
        <ArrowLeft size={18} />
        Back to Event
      </Link>

      <div className="booking-card">
        <h1>Book Your Tickets</h1>

        <h2>{event.title}</h2>

        <p>{event.location} | {event.date}</p>

        <div className="booking-price">
          <span>Price per ticket</span>
          <strong>₹{event.price}</strong>
        </div>

        <div className="quantity-section">
          <span>Select Tickets</span>

          <div className="quantity-controls">
            <button
              onClick={decreaseQuantity}
              disabled={quantity === 1}
            >
              <Minus size={18} />
            </button>

            <strong>{quantity}</strong>

            <button onClick={increaseQuantity}>
              <Plus size={18} />
            </button>
          </div>
        </div>

        <div className="total-price">
          <span>Total Amount</span>
          <strong>₹{totalPrice}</strong>
        </div>

        <button
            className="confirm-booking-btn"
            onClick={confirmBooking}
        >
            Confirm Booking
        </button>
      </div>
    </section>
  );
}

export default Booking;
