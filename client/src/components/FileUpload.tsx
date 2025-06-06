import React, { useState } from "react";
import axios from "axios";
import httpClient from "../httpClient";

const FileUpload = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = React.useState("");
  const [title, setTitle] = useState("");
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);

      const response = await httpClient.post("http://127.0.0.1:5000/upload", {
        email,
        url,
        title,
      });
      setLoading(false);
      setVisible(false);

      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || "URL upload failed");
      setVisible(true);
      setLoading(false);
    }
  };

  return (
    <>
      {visible ? (
        <div>
          <form onSubmit={handleAllUploads}>
            <div className="col-centered w-50 input-group my-4 px-5">
              <span className="input-group-text" id="basic-addon1">
                Website Title
              </span>
              <input
                type="text"
                className="form-control btn btn-secondary p-2 "
                id="white-placeholder"
                placeholder="My Awesome Site"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="col-centered w-50 input-group my-4 px-5">
              <span className="input-group-text" id="basic-addon1">
                Website Link
              </span>
              <input
                type="url"
                className="form-control btn btn-secondary p-2"
                id="white-placeholder"
                placeholder="https://"
                value={url}
                onChange={handleUrlChange}
              />
            </div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <button type="submit" className="mb-2 btn btn-outline-dark">
                Upload
              </button>
            )}
          </form>
          {message && <p>{message}</p>}
        </div>
      ) : (
        <>
          <p>Project Submitted Successfully!</p>
          <p>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => setVisible(true)}
            >
              Click here to change your submission!
            </button>
          </p>
        </>
      )}
    </>
  );
};

export default FileUpload;
