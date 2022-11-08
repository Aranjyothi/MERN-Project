import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navgate = useNavigate();
  let [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const respons = await axios.post("http://localhost:8080/auth/login,form");
      const info = await axios.get("http://localhost8080/user/info", {
        headers: {
          Authorization: `Bearer ${respons.data.token}`,
        },
      });
      localStorage.setItem("token", respons.data.token);
      setUser(info.data);
      navgate("/profile");
    } catch (error) {
      alert(error.respons);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={form.username}
        />
        <br />
        <br />
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <br /><br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Login;
