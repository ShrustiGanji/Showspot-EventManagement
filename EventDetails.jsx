
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import events from "../data/events";
import "./EventDetails.css";

function EventDetails() {
  const { id } = useParams();

  const event = events.find(
    (item) => item.id === Number(id)
  );

  if (!event) {
    return (
      <div className="event-not-found">
        <h2>Event Not Found</h2>
        <Link to="/">Back to Events</Link>
      </div>
    );
  }

  return (
    <section className="event-details">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} />
        Back to Events
      </Link>

      <div className="details-container">
        <img
          src={event.image}
          alt={event.title}
          className="details-image"
        />

        <div className="details-content">
          <span className="event-category">
            {event.category}
          </span>

          <h1>{event.title}</h1>

          <p className="details-description">
            Get ready for an unforgettable experience!
            Join us and enjoy an amazing event filled
            with entertainment and excitement.
          </p>

          <p>
            <CalendarDays size={18} />
            {event.date}
          </p>

          <p>
            <MapPin size={18} />
            {event.location}
          </p>

          <h2>₹{event.price} <span>per ticket</span></h2>

          <Link
            to={`/event/${event.id}/book`}
            className="book-btn"
          >
            Book Tickets
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;
