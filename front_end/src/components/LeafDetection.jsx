import React, { useState } from "react";
import "./LeafDetection.css";

function LeafDetection() {
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setOutput("");
    }
  };

  const handleCheck = async () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setOutput("Detected Disease: Powdery Mildew (Confidence: 92%)");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="leaf-detection">
      <div id="upload" className="upload-section">
        <h2>Upload Your Leaf Image</h2>
        <input type="file" accept="image/*" onChange={handleFileChange} className="file-input" />
        {image && (
          <div className="image-preview">
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded Leaf"
              className="uploaded-image"
            />
          </div>
        )}
      </div>
      <button onClick={handleCheck} className={`check-button ${isLoading ? "disabled" : ""}`} disabled={isLoading}>
        {isLoading ? "Checking..." : "Check"}
      </button>
      <div id="output" className="output-section">
        {output && <p className="output">{output}</p>}
      </div>
    </div>
  );
}

export default LeafDetection;
