import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage("Please select a file to upload");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.error || "File upload failed");
        }
    };

    return (
        <div>
            <form onSubmit={handleFileUpload}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FileUpload;
