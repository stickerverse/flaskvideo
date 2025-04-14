from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
from downloader import get_video_url_from_page, download_video

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

DOWNLOAD_DIR = os.path.join(os.getcwd(), 'downloads')
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

@app.route('/download', methods=['POST'])
def handle_download():
    data = request.json
    url = data.get('url')
    filename = data.get('filename', 'downloaded_video')

    try:
        links = get_video_url_from_page(url)
        if not links:
            return jsonify({'error': 'No video found'}), 400

        video_url = links[0]
        filepath = download_video(video_url, DOWNLOAD_DIR, filename)
        return jsonify({'message': 'Success', 'filepath': filepath, 'filename': os.path.basename(filepath)})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/video/<filename>', methods=['GET'])
def serve_video(filename):
    path = os.path.join(DOWNLOAD_DIR, filename)
    if os.path.exists(path):
        return send_file(path, as_attachment=True)
    return jsonify({'error': 'File not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)