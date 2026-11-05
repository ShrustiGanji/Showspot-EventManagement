
import EventCard from "./EventCard";
import "./Favorites.css";

function Favorites({ favorites, setFavorites, events }) {
  const favoriteEvents = events.filter((event) =>
    favorites.includes(event.id)
  );

  return (
    <section className="favorites-section" id="favorites">
      <div className="favorites-heading">
        <p>YOUR PERSONAL COLLECTION</p>
        <h2>My Favorites ❤️</h2>
        <span>Your saved events, all in one place.</span>
      </div>

      {favoriteEvents.length > 0 ? (
        <div className="events-grid">
          {favoriteEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>
      ) : (
        <p className="empty-favorites">
          You haven't added any favorite events yet.
        </p>
      )}
    </section>
  );
}

export default Favorites;
