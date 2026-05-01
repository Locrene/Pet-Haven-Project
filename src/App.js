import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Landing2 from "./pages/Landing2";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdoptionFeed from "./pages/AdoptionFeed";
import HelpSupport from "./pages/HelpSupport";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Landing2
              isLoggedIn={isLoggedIn}
              userName={userName}
              setIsLoggedIn={setIsLoggedIn}
              setUserName={setUserName}
            />
          }
        />

        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
              setUserName={setUserName}
            />
          }
        />

        <Route path="/register" element={<Register />} />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard
                isLoggedIn={isLoggedIn}
                userName={userName}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* ADOPTION */}
        <Route
          path="/adoption"
          element={
            isLoggedIn ? (
              <AdoptionFeed
                isLoggedIn={isLoggedIn}
                userName={userName}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* ✅ HELP SUPPORT (ADDED) */}
       <Route
  path="/help"
  element={
    isLoggedIn ? (
      <HelpSupport
        isLoggedIn={isLoggedIn}
        userName={userName}
        setIsLoggedIn={setIsLoggedIn}
        setUserName={setUserName}
      />
    ) : (
      <Navigate to="/login" />
    )
  }
/>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;