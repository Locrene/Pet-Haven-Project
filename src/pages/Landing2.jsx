import "../styles/app.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Navbar from "../components/Navbar";

function Landing({ isLoggedIn, userName, setIsLoggedIn, setUserName }) {
  const navigate = useNavigate();

  const pets = [
    {
      id: 1,
      name: "Maya",
      age: "1 year",
      location: "Danao",
      image: "/images/dog1.jpg",
    },
    {
      id: 2,
      name: "Leo",
      age: "3 years",
      location: "Marigondon",
      image: "/images/dog2.jpg",
    },
    {
      id: 3,
      name: "Luca",
      age: "2 years",
      location: "Tisa",
      image: "/images/dog3.jpg",
    },
    {
      id: 4,
      name: "Browny",
      age: "5 years",
      location: "Labangon",
      image: "/images/dog4.jpg",
    },
  ];

  const howItWorksRef = useRef(null);

  const handleProtectedNavigation = (path) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    navigate(path);
  };

  return (
    <div className="home-page">

      {/* ✅ NAVBAR (consistent everywhere) */}
      <Navbar
        isLoggedIn={isLoggedIn}
        userName={userName}
        setIsLoggedIn={setIsLoggedIn}
        setUserName={setUserName}
      />

      {/* ✅ MAIN CONTENT WRAPPER (VERY IMPORTANT FIX) */}
      <div className="page-container">

        {/* HERO */}
        <header className="hero-section">
          <h1>Find Your New Best Friend in Cebu City!</h1>
          <p>Connecting pets with loving homes in Cebu City</p>

          <div className="search-bar">
            <input type="text" placeholder="Search Pet Listings..." />
            <button>Search</button>
          </div>
        </header>

        {/* STATS */}
        <section className="stats-section">
          <div className="stat-card">
            <h2>17</h2>
            <h4>Pets Available</h4>
            <p>Pets available for Adoption</p>
          </div>

          <div className="stat-card">
            <h2>3</h2>
            <h4>Missing Pets</h4>
            <p>Missing pets reunited with owners</p>
          </div>

          <div className="stat-card">
            <h2>35</h2>
            <h4>Successfully adopted</h4>
            <p>Pets successfully Adopted</p>
          </div>
        </section>

        {/* FEATURED */}
        <section className="featured-section">
          <h2>Featured Pets | Say Laban Sila!</h2>

          <div className="pet-grid">
            {pets.map((pet) => (
              <div className="pet-card" key={pet.id}>
                <img src={pet.image} alt={pet.name} />
                <div className="pet-info">
                  <h3>{pet.name}</h3>
                  <div className="pet-details">
                    <span>{pet.age}</span>
                    <span>{pet.location}</span>
                  </div>
                  <button onClick={() => handleProtectedNavigation("/pet")}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="services-section">
          <div className="service-box">
            <h3>Easy Pet Adoption Listings</h3>
            <p>Post your pets quickly and easily.</p>
          </div>

          <div className="service-box">
            <h3>Report Missing Pets</h3>
            <p>Find your missing pet fast.</p>
          </div>

          <div className="service-box">
            <h3>Secure Messaging</h3>
            <p>Chat safely with adopters.</p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="howitworks-section" ref={howItWorksRef}>
          <h2>How it Works</h2>

          <div className="services-section">
            <div className="service-box">
              <h3>Find Your Pet</h3>
              <p>Browse listings and find your match.</p>
            </div>

            <div className="service-box">
              <h3>Connect</h3>
              <p>Chat with the owner.</p>
            </div>

            <div className="service-box">
              <h3>Adopt</h3>
              <p>Bring your pet home.</p>
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section className="care-section">
          <h2>Join Our Caring Community</h2>
          <p>PawHaven connects shelters and adopters in Cebu City.</p>
        </section>

      </div>
    </div>
  );
}

export default Landing;