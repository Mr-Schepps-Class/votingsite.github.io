import { useState } from "react";
import httpClient from "../httpClient";

export default function ScreenshotComponent() {
  const [image, setImage] = useState("");

  const getScreenshot = async () => {
    try {
        const response = await httpClient.get("http://127.0.0.1:5000/screenshot", {
            params: { url: "https://www.pluralsight.com/resources/blog/guides/convert-a-json-file-to-an-array-in-react" }, // Change URL dynamically
        });
        setImage(response.data.image);
    } catch (error) {
        console.error("Error capturing screenshot:", error);
    }
};


  return (
    <div className="p-4">
      <button onClick={getScreenshot} className="bg-blue-500 text-white px-4 py-2">
        Capture Screenshot
      </button>
      {image && <img src={image} alt="Screenshot" className="mt-4 border border-gray-300" />}
    </div>
  );
}
