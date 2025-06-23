import React, { useRef, useState } from 'react';
import video1 from './Assets/Doremon.mp4';
import video2 from './Assets/schin.mp4';
import video3 from './Assets/TJ.mp4';

const videos = [
    { id: 1, src: video1, title: 'Doraemon' },
    { id: 2, src: video2, title: 'Shinchan' },
    { id: 3, src: video3, title: 'Tom & Jerry' }
];

const MultipleVideos = () => {
    const [currentVideo, setCurrentVideo] = useState(videos[0]); // Default video
    const videoRef = useRef();

    const changeVideo = (video) => {
        setCurrentVideo(video);
        if (videoRef.current) {
            videoRef.current.load(); // Load the new video
            videoRef.current.play(); // Auto-play new video
        }
    };

    return (
        <div className="flex flex-col md:flex-row w-full h-screen p-4">
            {/* Main Video Player - Takes 75% of screen width */}
            <div className="w-full md:w-3/4 h-full">
                <video ref={videoRef} controls className="w-full h-full rounded-lg shadow-lg object-cover">
                    <source src={currentVideo.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h2 className="mt-2 text-xl font-semibold text-center">{currentVideo.title}</h2>
            </div>

            {/* Sidebar - Fully Visible Videos */}
            <div className="w-full md:w-1/4 h-full overflow-y-auto flex flex-col gap-2">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        onClick={() => changeVideo(video)}
                        className="cursor-pointer w-full h-[33%] border rounded-lg shadow-md overflow-hidden hover:opacity-80"
                    >
                        {/* Full-Width Video Preview */}
                        <video
                            className="w-full h-full object-cover"
                            muted
                            loop
                            onMouseEnter={(e) => e.target.play()} // Play on hover
                            onMouseLeave={(e) => e.target.pause()} // Pause when not hovered
                        >
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultipleVideos;
