import { createContext, useState, useEffect } from "react";
import { loginUser, signupUser, loginVendor, signupVendor, loginAdmin } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  const login = async (data, role) => {
    let response;
    if (role === "user") response = await loginUser(data);
    if (role === "vendor") response = await loginVendor(data);
    if (role === "admin") response = await loginAdmin(data);

    localStorage.setItem("user", JSON.stringify(response.user));
    localStorage.setItem("token", response.token);
    setUser(response.user);
    return response;
  };

  const signup = async (data, role) => {
    let response;
    if (role === "user") response = await signupUser(data);
    if (role === "vendor") response = await signupVendor(data);

    localStorage.setItem("user", JSON.stringify(response.user));
    localStorage.setItem("token", response.token);
    setUser(response.user);
    return response;
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
