import { Link, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, userName, variant }) {
  const navigate = useNavigate();

  const handleProtectedNavigation = (path) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    navigate(path);
  };

  return (
    <div className="navbar">

      <div className="logo-section">
        <div className="logo-icon">🐾</div>
        <div>
          <h2>PawHaven</h2>
          <p>Cebu City Pet Adoption</p>
        </div>
      </div>

      {variant !== "public" && (
        <ul className="nav-links">
          <li onClick={() => handleProtectedNavigation("/dashboard")}>Dashboard</li>
          <li onClick={() => handleProtectedNavigation("/adoption")}>Adoption</li>
          <li onClick={() => handleProtectedNavigation("/missing-pets")}>Missing Pets</li>
          <li onClick={() => handleProtectedNavigation("/how-it-works")}>How It Works</li>
        </ul>
      )}

      {!isLoggedIn ? (
        <div className="nav-buttons">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/register"><button>Sign Up</button></Link>
        </div>
      ) : (
        <div className="nav-buttons">
          <span className="welcome-text">Welcome, {userName}</span>
          <button onClick={() => navigate("/")}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;