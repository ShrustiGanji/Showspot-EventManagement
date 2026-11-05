
import { useState } from "react";
import events from "../data/events";
import EventCard from "./EventCard";
import "./Events.css";

function Events({favorites,setFavorites}) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Concert", "Comedy", "Theatre", "Festival"];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="events-section" id="events">
      <div className="events-heading">
        <p>FIND YOUR NEXT EXPERIENCE</p>
        <h2>Upcoming Events</h2>
        <span>Explore experiences worth remembering.</span>
      </div>

      <input
        type="text"
        className="event-search"
        placeholder="Search events or locations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category ? "active-category" : ""
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard
                key={event.id}
                event={event}
                favorites={favorites}
                setFavorites={setFavorites}
/>
          ))
        ) : (
          <p className="no-events">No events found. Try another search.</p>
        )}
      </div>
    </section>
  );
}

export default Events;
