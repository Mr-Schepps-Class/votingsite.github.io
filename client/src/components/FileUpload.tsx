import React, { useState } from "react";
import axios from "axios";
import httpClient from "../httpClient";

const FileUpload = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = React.useState("");
  const [title, setTitle] = useState("");

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
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAllUploads = async (e) => {
    e.preventDefault();
    if (!url) {
      setMessage("Please enter a URL to upload");
      return;
    }
    if (!title) {
      setMessage("Please enter a title to upload");
      return;
    }

    try {
      const response = await httpClient.post("http://127.0.0.1:5000/upload", {
        email,
        url,
        title,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || "URL upload failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleAllUploads}>
        <div className="col-centered w-50 input-group my-4 px-5">
          <span className="input-group-text" id="basic-addon1">
            Enter Link
          </span>
          <input
            type="url"
            className="form-control"
            placeholder="https://"
            value={url}
            onChange={handleUrlChange}
          />
        </div>
        <div className="col-centered w-50 input-group my-4 px-5">
          <span className="input-group-text" id="basic-addon1">
            Website Title
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="My Awesome Site"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;
