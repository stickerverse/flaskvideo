import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [url, setUrl] = useState('');
  const [filename, setFilename] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await axios.post('http://localhost:5000/download', { url, filename });
      if (response.data && response.data.filename) {
        setDownloadLink(`http://localhost:5000/video/${response.data.filename}`);
      }
    } catch (err) {
      alert('Download failed: ' + err.message);
    }
    setDownloading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">🎬 Video Downloader</h1>
      <input
        type="text"
        placeholder="Enter page URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border px-4 py-2 rounded w-full max-w-md mb-2"
      />
      <input
        type="text"
        placeholder="Custom filename (optional)"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
        className="border px-4 py-2 rounded w-full max-w-md mb-4"
      />
      <button
        onClick={handleDownload}
        disabled={downloading}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        {downloading ? 'Downloading...' : 'Download Video'}
      </button>

      {downloadLink && (
        <div className="mt-6">
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Click here to download your video
          </a>
        </div>
      )}
    </div>
  );
}
