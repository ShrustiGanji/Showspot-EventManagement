function MyBookings({ bookings }) {
  return (
    <section className="my-bookings-section">
      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <p>You haven't booked any events yet.</p>
      ) : (
        <div className="my-bookings-list">
          {bookings.map((booking) => (
  <div className="booking-card" key={booking.id}>
    <h2>{booking.eventTitle}</h2>

    <p>Date: {booking.eventDate}</p>
    <p>Location: {booking.location}</p>
    <p>Tickets: {booking.quantity}</p>
    <p>Total Amount: ₹{booking.totalPrice}</p>
  </div>
))}
        </div>
      )}
    </section>
  );
}

export default MyBookings;