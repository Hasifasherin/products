import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About/about";
import Home from "./pages/Home/home";
import Login from "./pages/Login/Login";
import { AuthProvider, useAuth } from "./context/AuthContext";
import "./App.css";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function AppRoutes() {
  return (
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
        path="/aboutus"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
