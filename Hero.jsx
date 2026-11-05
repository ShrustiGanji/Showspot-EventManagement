
import { ArrowRight, Play } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-tag">YOUR NEXT EXPERIENCE STARTS HERE</p>

        <h1>
          Discover events.
          <br />
          <span>Make memories.</span>
        </h1>

        <p className="hero-description">
          From electrifying concerts to comedy nights,
          discover the events that make life unforgettable.
        </p>

        <div className="hero-buttons">
          <a href="#events" className="primary-btn">
            Explore Events <ArrowRight size={18} />
          </a>

          <a href="#about" className="secondary-btn">
            <Play size={18} /> Discover ShowSpot
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>500+</h3>
            <p>Events to explore</p>
          </div>

          <div>
            <h3>50+</h3>
            <p>Cities covered</p>
          </div>

          <div>
            <h3>One</h3>
            <p>Unforgettable experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
