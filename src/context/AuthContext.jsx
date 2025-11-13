import { createContext, useContext, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

const fakeUsers = [
  { username: "admin", password: "password" },
  { username: "user1", password: "1234" },
  { username: "user2", password: "abcd" },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (username, password) => {
    const found = fakeUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (found) {
      const userData = { username: found.username };
      setUser(userData);
      localStorage.setItem("authUser", JSON.stringify(userData));
      toast.success(`Welcome, ${found.username}! 🎉`);
      return true;
    } else {
      toast.error("Invalid username or password!");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
    toast.info("Logged out successfully!");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => useContext(AuthContext);
