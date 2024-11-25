import React, { useState } from "react";
import "./LeafDiseaseDetection.css"; // Import CSS for styling

function LeafDiseaseDetection() {
  const [image, setImage] = useState(null); // Store the uploaded image
  const [output, setOutput] = useState(""); // Store the output result
  const [isLoading, setIsLoading] = useState(false); // Loading state for button

  // Handle file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setOutput(""); // Clear previous output
    }
  };

  // Handle Check button click
  const handleCheck = async () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    setIsLoading(true); // Show loading state

    // Simulate sending the image to the backend and receiving a response
    setTimeout(() => {
      setOutput("Detected Disease: Powdery Mildew (Confidence: 92%)"); // Simulated output
      setIsLoading(false); // Remove loading state
    }, 2000);

    // Uncomment this for actual backend integration:
    /*
    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setOutput(`Detected Disease: ${data.disease} (Confidence: ${data.confidence}%)`);
    } catch (error) {
      setOutput("Error detecting disease. Please try again.");
    } finally {
      setIsLoading(false); // Remove loading state
    }
    */
  };

  return (
    <div className="container">
      <h1 className="title">Leaf Disease Detection</h1>
      <div className="upload-section">
        <input type="file" accept="image/*" onChange={handleFileChange} className="file-input" />
      </div>
      {image && (
        <div className="image-preview">
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded Leaf"
            className="uploaded-image"
          />
        </div>
      )}
      <button
        onClick={handleCheck}
        className={`check-button ${isLoading ? "disabled" : ""}`}
        disabled={isLoading}
      >
        {isLoading ? "Checking..." : "Check"}
      </button>
      {output && <div className="output">{output}</div>}
    </div>
  );
}

export default LeafDiseaseDetection;
