import axios from "axios";
import httpStatus from "http-status";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const authContext = useContext(AuthContext);
  const [userData, setUserData] = useState(authContext);
  const router = useNavigate();

 const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL ,
  withCredentials: true,
});
  const handleRegister = async (name, username, password) => {
    try {
      let request = await client.post("/register", { name, username, password });

      if (request.status === httpStatus.CREATED) {
        return request.data.message;
      }
    } catch (err) {
      console.error("Register failed:", err.response?.data || err.message);
      throw err;
    }
  };

  const handleLogin = async (username, password) => {
    try {
      let request = await client.post("/login", { username, password });

      console.log("Login response:", request.data);

      if (request.status === httpStatus.OK) {
        localStorage.setItem("token", request.data.token);
        router("/home");
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      throw err;
    }
  };

  const getHistoryOfUser = async () => {
    try {
      let request = await client.get("/get_all_activity", {
        params: { token: localStorage.getItem("token") },
      });
      return request.data;
    } catch (err) {
      console.error("Fetch history failed:", err.response?.data || err.message);
      throw err;
    }
  };

  const addToUserHistory = async (meetingCode) => {
    try {
      let request = await client.post("/add_to_activity", {
        token: localStorage.getItem("token"),
        meeting_code: meetingCode,
      });
      return request;
    } catch (err) {
      console.error("Add history failed:", err.response?.data || err.message);
      throw err;
    }
  };

  const data = {
    userData,
    setUserData,
    addToUserHistory,
    getHistoryOfUser,
    handleRegister,
    handleLogin,
  };

  return (
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  );
};
