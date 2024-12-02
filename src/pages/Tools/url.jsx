import React, { useState } from "react";
import axios from "axios";
import { isURL } from "validator";

const Url = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const scanUrl = async () => {
    if (!url) {
      setError("Please enter a URL.");
      return;
    }

    if (!isURL(url)) {
      setError("Invalid URL format.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        '/api/scan-url',
        { url }
      );
      setResult(response.data);
    } catch (err) {
      console.error("Error scanning URL:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "600px",
      width: "90%",
      margin: "auto",
      // backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "20px",
      color: "#007BFF",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",

    },
    input: {
      padding: "10px",
      fontSize: "1rem",
      border: "1px solid blue",
      borderRadius: "5px",
      width: "100%",
    },
    button: {
      padding: "10px",
      fontSize: "1rem",
      color: "#fff",
      // backgroundColor: "#007BFF",
      border: "1px solid blue",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    error: {
      color: "red",
      marginTop: "10px",
    },
    result: {
      marginTop: "20px",
    },
    safe: {
      color: "green",
      fontWeight: "bold",
    },
    notSafe: {
      color: "red",
      fontWeight: "bold",
    },
    matches: {
      // backgroundColor: "white",
      padding: "10px",
      borderRadius: "5px",
      overflow: "auto",
      textAlign: "left",
    },
    responsiveContainer: {
      "@media (min-width: 768px)": {
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
      },
    },
    responsiveInput: {
      flex: "1",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Secure URL Scanner</h1>
      <div style={{ ...styles.inputContainer, ...styles.responsiveContainer }}>
       
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ ...styles.input, ...styles.responsiveInput, 
            // backgroundColor: "none"
            color: "blue"
    
          }}
        />

        <button
          onClick={scanUrl}
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          {loading ? "Scanning..." : "Scan URL"}
        </button>
      </div>
      {error && <p style={styles.error}>{error}</p>}
      {result && (
        <div style={styles.result}>
          {result.safe ? (
            <p style={styles.safe}>✅ The URL is safe.</p>
          ) : (
            <p style={styles.notSafe}>❌ The URL is not safe.</p>
          )}
          {result.matches && (
            <pre style={styles.matches}>
              {JSON.stringify(result.matches, null, 2)}
            </pre>
          )}
        </div>
      )}
    </div>
  );
};

export default Url;
