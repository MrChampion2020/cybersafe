import React, { useState } from "react";
import axios from "axios";

function Scanner() {
  const [email, setEmail] = useState("");
  const [emailLinks, setEmailLinks] = useState([]); // Stores links to be scanned
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleLinksInput = (e) => setEmailLinks(e.target.value.split(',')); // Comma-separated links

  const initiateScan = async () => {
    setLoading(true);
    setScanResult(null);
    try {
      const response = await axios.post("http://localhost:5000/api/scan-email", { email, links: emailLinks });
      setScanResult(response.data);
    } catch (error) {
      console.error("Scan failed:", error);
      setScanResult({ message: "Error occurred during scanning." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Email Vulnerability Scanner</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailInput}
          style={styles.input}
          required
        />
        <textarea
          placeholder="Enter URLs from the email, separated by commas"
          value={emailLinks.join(",")}
          onChange={handleLinksInput}
          style={styles.textarea}
        />
        <button onClick={initiateScan} disabled={loading} style={styles.button}>
          {loading ? "Scanning..." : "Scan for Vulnerabilities"}
        </button>
        {scanResult && (
          <div style={styles.resultContainer}>
            <h3 style={styles.resultHeader}>Scan Results</h3>
            <p style={styles.resultText}>{scanResult.message}</p>
            {scanResult.safetyStatus && <p style={styles.resultText}>Status: {scanResult.safetyStatus.details}</p>}
            {scanResult.recoveryStatus && <p style={styles.resultText}>{scanResult.recoveryStatus.status}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#f0f0f0",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    width: "100%",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
    resize: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  resultContainer: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
  },
  resultHeader: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  resultText: {
    fontSize: "16px",
    color: "#666",
  },
};

// Media queries for responsiveness
const mediaQueries = `
  @media (max-width: 768px) {
    .card {
      padding: 15px;
    }
    .header {
      font-size: 20px;
    }
    .input,
    .textarea,
    .button {
      font-size: 14px;
    }
  }
`;

export default Scanner;
