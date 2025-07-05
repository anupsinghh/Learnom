import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown"; // Import markdown renderer

const AiAssistant = () => {
  const [summary, setSummary] = useState(""); // Store the generated summary
  const [loading, setLoading] = useState(false); // Loading state for file processing
  const [error, setError] = useState(""); // Store errors if any

  // Function to handle file upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setError("");

    try {
      // Send the file to the backend for processing
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSummary(response.data.summary.trim()); // Trim whitespace to ensure proper rendering
    } catch (error) {
      console.error("Upload Error:", error);
      setError("Failed to summarize file.");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "15px", textAlign: "center" }}>
      <h2 style={{ color: "#007bff", marginBottom: "10px" }}>AI Assistant - Upload PDF/PPT</h2>
      <input
        type="file"
        accept=".pdf,.pptx"
        onChange={handleFileUpload}
        style={{
          display: "block",
          margin: "8px auto",
          padding: "6px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      />

      {loading && <p style={{ color: "#28a745", fontWeight: "bold", marginTop: "10px" }}>Processing...</p>}
      {error && <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>{error}</p>}

      {summary ? (
        <div
          style={{
            background: "#f8f9fa",
            padding: "12px",
            borderRadius: "6px",
            marginTop: "15px",
            textAlign: "left",
            whiteSpace: "normal",
            fontFamily: "Arial, sans-serif",
            lineHeight: "1.4",
            border: "1px solid #ddd",
          }}
        >
          <h3 style={{ color: "#007bff", marginBottom: "8px" }}>Summary:</h3>
          <ReactMarkdown>{summary}</ReactMarkdown> {/* Render markdown properly */}
        </div>
      ) : (
        !loading && <p style={{ color: "#555", marginTop: "10px" }}>No summary available.</p>
      )}
    </div>
  );
};

export default AiAssistant;
