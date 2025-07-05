const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const axios = require("axios");
const cors = require("cors");
const mammoth = require("mammoth"); // For PPTX extraction
require("dotenv").config();

const app = express();
const upload = multer();

app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Ensure API key is set
if (!GEMINI_API_KEY) {
  console.error("❌ Missing GEMINI_API_KEY in environment variables!");
  process.exit(1);
}

// Function to summarize text using Gemini API
const summarizeText = async (text) => {
  try {
    const chunk = text.slice(0, 5000);

    console.log("🔹 Sending request to Gemini API...");
    console.log("🔹 Extracted Text (First 500 chars):", chunk.slice(0, 500));

    // Improved Prompt for Detailed Summary with Formatting
    const prompt = `
      Summarize the following text in a well-structured format with clear headings and bullet points. 
      
      Specifically:
      
      -   Use headings to divide the summary into logical sections.
      -   Summarize in a way that every thing should be covered(important).
      -   Under each section, use bullet points to list definition,key information, advantages, and disadvantages(dont mention label key info or definition).
      -   If possible, use nested bullet points for sub-items.
      -   Keep the summary concise but informative.
      -   summary should contain every important topic from the document
      -   Include possible questions from the document at the end of summary.
      
      
      Text:
      ${chunk}
    `;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      { headers: { "Content-Type": "application/json" } }
    );

    console.log("🔹 Gemini API Response:", JSON.stringify(response.data, null, 2));

    return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "Summary not available.";
  } catch (error) {
    console.error("❌ Gemini API Error:", error?.response?.data || error.message);
    return "Failed to generate summary.";
  }
};

// Function to extract text from PPT
const extractTextFromPPT = async (buffer) => {
  try {
    const result = await mammoth.extractRawText({ buffer });
    return result.value || "No text extracted from PPT.";
  } catch (error) {
    console.error("❌ PPT Extraction Error:", error);
    return "Failed to extract text from PPT.";
  }
};

// Function to format bullet points consistently
const formatBulletPoints = (summary) => {
  if (!summary) return "";

  const lines = summary.split("\n").map(line => line.trim());
  let formattedSummary = "";

  lines.forEach(line => {
    if (line.startsWith("## ")) {
      formattedSummary += `\n\n🔹 ${line.slice(3)}\n\n`;  // Convert ## Heading to 🔹 Heading
    } else if (line.startsWith("### ")) {
      formattedSummary += `\n👉 ${line.slice(4)}\n`; // Convert ### Subheading to 👉
    } else if (line.startsWith("- ")) {
      formattedSummary += `✅ ${line.slice(2)}\n`; // Convert "-" bullet points to "✅"
    } else {
      formattedSummary += `${line} `; // Normal text
    }
  });

  return formattedSummary.trim();
};


// API to process PDF/PPT and summarize content
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const fileBuffer = req.file.buffer;
    let extractedText = "";

    if (req.file.mimetype === "application/pdf") {
      console.log("📂 Processing PDF file...");
      const data = await pdfParse(fileBuffer);
      extractedText = data.text;
    } else if (req.file.mimetype === "application/vnd.openxmlformats-officedocument.presentationml.presentation") {
      console.log("📂 Processing PPT file...");
      extractedText = await extractTextFromPPT(fileBuffer);
    } else {
      return res.status(400).json({ error: "Unsupported file format. Please upload a PDF or PPT." });
    }

    console.log("✅ Extracted Text (First 500 chars):", extractedText.slice(0, 500));

    if (!extractedText.trim()) {
      return res.status(400).json({ error: "No readable text extracted from the file." });
    }

    // Generate summary and format it
    const summary = await summarizeText(extractedText);
    const formattedSummary = formatBulletPoints(summary);

    res.json({ summary: formattedSummary });

  } catch (error) {
    console.error("❌ Error processing file:", error);
    res.status(500).json({ error: "Error processing file" });
  }
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("AI PDF/PPT Summary API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));