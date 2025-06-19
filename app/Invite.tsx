'use client';
import React, { useRef, useState } from 'react';

const Invite = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => {
          setError('Failed to play video. Please try again.');
          console.error('Video playback error:', err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setError('Video failed to load. Please check if the video file exists in the public directory.');
    console.error('Video loading error:', e);
  };

  const handleVideoLoad = () => {
    setIsLoaded(true);
    setError(null);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#f5ecd7cc] via-[#e7d7b6cc] to-[#c9b07fcc]" style={{backdropFilter: 'blur(12px)'}}>
      <div className="w-full max-w-3xl rounded-3xl bg-white/30 shadow-2xl backdrop-blur-lg p-8 flex flex-col items-center" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', border: '1px solid rgba(255,255,255,0.18)'}}>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[#3a2a13] text-center"
            style={{
              fontFamily: 'Merriweather, serif',
              textShadow: '0 0 8px #fffbe6, 0 0 2px #bfa76a',
            }}>
          Awaken the Network Within
        </h1>
        <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl"
             style={{
               boxShadow: '0 0 20px rgba(191, 167, 106, 0.3), 0 0 40px rgba(62, 207, 255, 0.1)',
               border: '1px solid rgba(255,255,255,0.18)'
             }}>
          {error ? (
            <div className="flex flex-col items-center justify-center p-8 text-white bg-[#0a1929] min-h-[300px]">
              <svg className="w-16 h-16 mb-4 text-[#3ecfff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-center text-lg">{error}</p>
              <p className="text-center text-sm mt-2 text-gray-400">
                Please add video.mp4 to the public directory of your project
              </p>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onError={handleVideoError}
                onLoadedData={handleVideoLoad}
                playsInline
                autoPlay
                muted
              >
                <source src="/video.mp4" type="video/mp4" />
                <source src="/video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              {isLoaded && (
                <div className="absolute bottom-0 left-0 right-0 flex items-center gap-4 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {isPlaying ? (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </button>
                  <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-[#3ecfff] transition-all duration-300"/>
                  </div>
                  <button
                    onClick={toggleMute}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Invite; 