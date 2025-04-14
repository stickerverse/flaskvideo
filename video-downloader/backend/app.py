from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import yt_dlp
import os
import uuid

app = Flask(__name__)
CORS(app)

@app.route('/download', methods=['POST'])
def download_video():
    data = request.json
    url = data.get('url')
    filename = data.get('filename', f"video_{uuid.uuid4()}.mp4")
    output_path = f"downloads/{filename}"

    os.makedirs("downloads", exist_ok=True)
    ydl_opts = {
        'format': 'best',
        'outtmpl': output_path,
        'quiet': True
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        return jsonify({ "success": True, "filename": filename })
    except Exception as e:
        return jsonify({ "success": False, "error": str(e) })

@app.route('/video/<filename>')
def get_video(filename):
    return send_file(f"downloads/{filename}", as_attachment=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)