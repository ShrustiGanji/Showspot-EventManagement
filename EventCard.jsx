
import { CalendarDays, Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Countdown from "./Countdown";
import "./EventCard.css";

function EventCard({ event, favorites, setFavorites }) {

  const isFavorite = favorites.includes(event.id);

  function toggleFavorite() {
    if (isFavorite) {
      setFavorites(
        favorites.filter((id) => id !== event.id)
      );
    } else {
      setFavorites([...favorites, event.id]);
    }
  }

  return (
    <article className="event-card">
      <div className="event-image-container">
        <img
          src={event.image}
          alt={event.title}
          className="event-image"
        />

        <button
          className={`favorite-btn ${isFavorite ? "favorited" : ""}`}
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            size={21}
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="event-info">
        <span className="event-category">{event.category}</span>

        <h3>{event.title}</h3>

        <p>
          <CalendarDays size={16} />
          {event.date}
        </p>

        <p>
          <MapPin size={16} />
          {event.location}
        </p>

        <Countdown eventDate={event.date} />

        <div className="event-card-bottom">
          <strong>₹{event.price}</strong>
          <Link to={`/event/${event.id}`} className="view-details-btn">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
