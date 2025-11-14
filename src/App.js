import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Login from "./pages/Login/Login";
import "./App.css";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <div className="app-layout">
        
        {/* Show header only when logged in */}
        {user && <Header />}

        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

            <Route
              path="/about"
              element={
                <PrivateRoute>
                  <About />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>

        {/* Show footer only when logged in */}
        {user && <Footer />}
      </div>
    </BrowserRouter>
  );
}
