import { Link, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, userName, setIsLoggedIn, setUserName, variant }) {
  const navigate = useNavigate();

  const handleProtectedNavigation = (path) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    navigate(path);
  };

  const handleLogout = () => {
  const confirmLogout = window.confirm("Are you sure you want to logout?");

  if (confirmLogout) {
    setIsLoggedIn(false);
    setUserName("");
    navigate("/");
  }
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
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => handleProtectedNavigation("/dashboard")}>Dashboard</li>
          <li onClick={() => handleProtectedNavigation("/adoption")}>Adoption</li>
          <li onClick={() => handleProtectedNavigation("/missing-pets")}>Help and Support</li>
          
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
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;