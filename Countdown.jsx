
import { useEffect, useState } from "react";

function Countdown({ eventDate }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const target = new Date(eventDate + "T00:00:00");

      const difference = target - now;

      if (difference < 0) {
        setTimeLeft("Event Ended");
        return;
      }

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      if (days === 0 && hours === 0 && minutes === 0) {
        setTimeLeft("Live Now");
      } else {
        setTimeLeft(
          `${days}d ${hours}h ${minutes}m ${seconds}s left`
        );
      }
    }

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return <p className="countdown">{timeLeft}</p>;
}

export default Countdown;
