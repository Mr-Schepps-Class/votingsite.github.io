import React, { useState } from "react";
import axios from "axios";
import httpClient from "../httpClient";

const FileUpload = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = React.useState("");

  const email = user.email;

  React.useEffect(() => {
      (async () => {
        try {
          const resp = await httpClient.get("http://127.0.0.1:5000/@me");
          setUser(resp.data);
        } catch (error) {
          console.log("Not authenticated");
          setUser("none");
        }
      })();
    }, []);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleUrlUpload = async (e) => {
    e.preventDefault();
    if (!url) {
      setMessage("Please enter a URL to upload");
      return;
    }

    try {
      const response = await httpClient.post("http://127.0.0.1:5000/upload", {
        email,
        url
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || "URL upload failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleUrlUpload}>
        <input type="text" value={url} onChange={handleUrlChange} placeholder="Enter file URL" />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;
