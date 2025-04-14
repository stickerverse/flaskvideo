import React, { useState } from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [filename, setFilename] = useState('')
  const [status, setStatus] = useState('')
  const [downloadLink, setDownloadLink] = useState('')

  const handleDownload = async () => {
    setStatus('Downloading...')
    const response = await fetch('https://your-backend-url.onrender.com/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, filename })
    })
    const result = await response.json()
    if (result.success) {
      setStatus('Download ready')
      setDownloadLink(`https://your-backend-url.onrender.com/video/${result.filename}`)
    } else {
      setStatus('Failed: ' + result.error)
    }
  }

  return (
    <div className="app">
      <h1>Video Downloader</h1>
      <input type="text" placeholder="Enter video URL" value={url} onChange={e => setUrl(e.target.value)} />
      <input type="text" placeholder="Optional filename.mp4" value={filename} onChange={e => setFilename(e.target.value)} />
      <button onClick={handleDownload}>Download</button>
      <p>{status}</p>
      {downloadLink && <a href={downloadLink} target="_blank" rel="noreferrer">Download Link</a>}
    </div>
  )
}

export default App