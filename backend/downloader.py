import os
import yt_dlp
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright

def get_video_url_from_page(url):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(url, wait_until="networkidle")
        html = page.content()
        browser.close()

    soup = BeautifulSoup(html, "html.parser")
    for video in soup.find_all("video"):
        for source in video.find_all("source"):
            src = source.get("src")
            if src:
                return [src]
    return [url]  # fallback to yt-dlp handling

def download_video(video_url, output_path, filename):
    output_template = os.path.join(output_path, f"{filename}.%(ext)s")
    ydl_opts = {
        'outtmpl': output_template,
        'format': 'bestvideo+bestaudio/best',
        'noplaylist': True,
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        result = ydl.download([video_url])
    for file in os.listdir(output_path):
        if file.startswith(filename):
            return os.path.join(output_path, file)
    return None