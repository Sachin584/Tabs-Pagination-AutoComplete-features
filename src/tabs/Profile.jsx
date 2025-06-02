import React from "react";
import { useState } from "react";

function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  let validate = () => {
    let newErr = {};
    if (!email) {
      newErr.email = "email is required";
    }
    if (!password) {
      newErr.password = "password is required";
    }
    setErrors(newErr);
    return Object.keys(newErr).length == 0;
  };
  let handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully!");
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", width: "300px" }}>
      <h2>Login</h2>

      <div style={{ marginBottom: "16px" }}>
        <label>Email:</label>
        <div style={{ minHeight: "20px", color: "red" }}>
          {errors.email || " "}
        </div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label>Password:</label>
        <div style={{ minHeight: "20px", color: "red" }}>
          {errors.password || " "}
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <button type="submit" style={{ padding: "8px 16px" }}>
        Login
      </button>
    </form>
  );
}

export default Profile;
