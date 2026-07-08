import Image from "next/image";
import React from "react";

const getYouTubeID = (url: string): string | null => {
  const regex = /[?&]v=([^&#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const YouTubeThumbnailPage: React.FC = () => {
  const videoUrl: string = "https://www.youtube.com/watch?v=z8oP7z1DNK0";
  const videoId: string | null = getYouTubeID(videoUrl);
  const thumbnailUrl: string = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : "";

  return (
    <div className=" bg-black flex flex-col py-4 rounded-lg items-center justify-center text-white px-4">
      <h1 className="text-3xl font-bold mb-6">10th Anniversary of Prayas Children's Club</h1>

      {videoId ? (
        <div className="relative w-[640px] h-[360px]">
          <Image
            src={thumbnailUrl}
            alt="YouTube Thumbnail"
            layout="fill"
            objectFit="cover"
            className="rounded-lg border-2 border-white"
          />
        </div>
      ) : (
        <p>Invalid YouTube URL</p>
      )}

      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-4 py-2 bg-red-600 rounded text-white hover:bg-red-700"
      >
        Watch on YouTube
      </a>
    </div>
  );
};

export default YouTubeThumbnailPage;
