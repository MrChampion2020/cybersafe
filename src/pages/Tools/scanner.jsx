import React, { useState } from 'react';
import axios from "axios";


const API_URL = import.meta.env.VITE_BACKEND_URL;


export default function BasicVulnerabilityScanner() {
  const [url, setUrl] = useState('');
  const [scanResults, setScanResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const api = API_URL;

  const handleScan = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setScanResults(null);

    try {
      const response = await axios.post(`${api}/api/scan`, { url });
      setScanResults(response.data);
    } catch (err) {
      setError('An error occurred while scanning the domain.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderVulnerabilities = () => {
    if (!scanResults || !scanResults.vulnerabilities) return null;

    return (
      <div className="mt-4 p-4 bg-red-100 border border-red-400 rounded">
        <h3 className="text-lg font-semibold mb-2">Vulnerabilities Detected</h3>
        <ul className="list-disc pl-5">
          {scanResults.vulnerabilities.map((vuln, index) => (
            <li key={index}>{vuln}</li>
          ))}
        </ul>
      </div>
    );
  };

  const renderSuggestions = () => {
    if (!scanResults || !scanResults.vulnerabilities) return null;

    const suggestions = {
      'Missing HSTS header': 'Implement HTTP Strict Transport Security (HSTS) to enforce HTTPS connections.',
      'Missing X-Frame-Options header': 'Add X-Frame-Options header to prevent clickjacking attacks.',
      'Missing X-XSS-Protection header': 'Enable X-XSS-Protection header to activate browser\'s XSS filter.',
      'Missing Content Security Policy': 'Implement a Content Security Policy to mitigate XSS and injection attacks.',
    };

    return (
      <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
        <h3 className="text-lg font-semibold mb-2">Security Recommendations</h3>
        <ul className="list-disc pl-5">
          {scanResults.vulnerabilities.map((vuln, index) => (
            <li key={index}>{suggestions[vuln] || `Address the ${vuln} vulnerability.`}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Basic Domain Vulnerability Scanner</h2>
      <form onSubmit={handleScan} className="mb-4">
        <div className="flex">
          <input
            type="url"
            className="flex-grow px-4 py-2 border rounded-l"
            placeholder="Enter URL (e.g., https://example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r"
            disabled={loading}
          >
            {loading ? 'Scanning...' : 'Scan'}
          </button>
        </div>
      </form>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 rounded">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {scanResults && (
        <div className="space-y-4">
          <div className={`p-4 ${scanResults.safeBrowsing === 'Safe' ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400'} border rounded`}>
            <h3 className="text-lg font-semibold mb-2">Google Safe Browsing Status</h3>
            <p>{scanResults.safeBrowsing === 'Safe' ? 'This domain is not flagged as unsafe.' : 'This domain has been flagged as potentially unsafe.'}</p>
          </div>

          <div className={`p-4 ${scanResults.ssl.valid ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400'} border rounded`}>
            <h3 className="text-lg font-semibold mb-2">SSL Certificate</h3>
            <p>
              {scanResults.ssl.valid 
                ? `Valid (Expires in ${scanResults.ssl.daysRemaining} days)` 
                : 'Invalid SSL certificate'}
            </p>
          </div>

          <div className="p-4 bg-blue-100 border border-blue-400 rounded">
            <h3 className="text-lg font-semibold mb-2">DNS Information</h3>
            <p>IP Address: {scanResults.dns}</p>
          </div>

          {renderVulnerabilities()}
          {renderSuggestions()}
        </div>
      )}
    </div>
  );
}

