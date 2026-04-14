import "../styles/app.css";
import { useNavigate } from "react-router-dom";
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

  const handleProtectedNavigation = (path) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    navigate(path);
  };

  return (
    <div className="home-page">

      <Navbar
  isLoggedIn={isLoggedIn} userName={userName} setIsLoggedIn={setIsLoggedIn} setUserName={setUserName}
/>

      


      <header className="hero-section">
        <h1>Find Your New Best Friend in Cebu City!</h1>
        <p>Connecting pets with loving homes in Cebu City</p>

        <div className="search-bar">
          <input type="text" placeholder="Search Pet Listings..." />
          <button>Search</button>

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

        </div>

        
      </header>

      

      {/* <section className="stats-section">
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
      </section> */}

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

      <section className="services-section">
        <div className="service-box">
          <h3>Easy Pet Adoption Listings</h3>
          <p>Post your pets for adoption quickly and easily.</p>
        </div>

        <div className="service-box">
          <h3>Report Missing Pets</h3>
          <p>Alert your community and find your missing pet fast.</p>
        </div>

        <div className="service-box">
          <h3>Secure In-App Messaging</h3>
          <p>Chat safely with pet adopters right inside the platform.</p>
        </div>
      </section>
    </div>
  );
}

export default Landing;