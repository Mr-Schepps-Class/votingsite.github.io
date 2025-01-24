import httpClient from "./httpClient";
import React, { useState } from "react";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const registerUser = async () => {
    try {
      const resp = await httpClient.post("http://127.0.0.1:5000/register", {
        email,
        password,
      });
      window.location.href = "/";
    } catch (e: any) {
      // Handle error
      if (e.message === "Request failed with status code 409") {
        alert("This user already exists");
      }
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="button" onClick={() => registerUser()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
