import React, { useEffect, useRef, useState } from 'react';
import './LoadingPage.css'; // Import your CSS for styling

const LoadingPage = () => {
    const videoRef = useRef(null);
    const audioRef = useRef(null);
    const [displayedMessage, setDisplayedMessage] = useState('');
    const intervalRef = useRef(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true); // Start with audio muted

    const fullMessage = "Step Back in Time: Explore History with Us!";

    useEffect(() => {
        // Set video playback rate
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5; // Adjust playback speed if needed
        }

        // Function to try playing audio
        const playAudio = async () => {
            if (audioRef.current) {
                try {
                    await audioRef.current.play();
                    setIsAudioPlaying(true); // Track if audio is playing
                    console.log("Audio is playing");
                } catch (error) {
                    console.error("Error playing audio:", error);
                }
            }
        };

        // Start displaying the message
        const displayMessage = (message) => {
            let index = 0;
            setDisplayedMessage('');

            intervalRef.current = setInterval(() => {
                if (index < message.length) {
                    setDisplayedMessage((prev) => prev + message[index]);
                    index++;
                } else {
                    clearInterval(intervalRef.current);
                }
            }, 150);
        };

        displayMessage(fullMessage);

        // Attempt to play audio on mount
        const timeoutId = setTimeout(() => {
            playAudio();
        }, 1000); // Delay to allow the video to load first

        // Cleanup the interval and timeout on component unmount
        return () => {
            clearInterval(intervalRef.current);
            clearTimeout(timeoutId);
        };
    }, []);

    // Handler for user interaction to start audio
    const handleAudioPlay = () => {
        if (!isAudioPlaying) {
            audioRef.current.play();
            setIsAudioPlaying(true);
        }
    };

    // Toggle mute state
    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted; // Toggle muted state
            setIsMuted((prev) => !prev); // Update state
        }
    };

    return (
        <div className="loading-container" onClick={handleAudioPlay}>
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                className="video-background"
            >
                <source src="/loadingBG2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <audio ref={audioRef} loop muted={isMuted}>
                <source src="/landing_speech.mp3" type="audio/mp3" />
                Your browser does not support the audio tag.
            </audio>

            <div className="welcome-message">
                {displayedMessage}
            </div>

            <div className="logo-container">
                <img src="/logo1.png" alt="Time Machine Logo" className="logo" />
            </div>

            {/* Mute Button */}
            <div 
                className="mute-button" 
                onClick={toggleMute} 
                style={{
                    position: 'absolute',
                    top: '50px',
                    left: '20px',
                    cursor: 'pointer',
                    zIndex: 10 // Ensure it's above other elements
                }}
            >
                {/* Show mute icon when audio is muted, and unmute icon when audio is playing */}
                <img 
                    src={isMuted ? "/mute-icon.png" : "/unmute-icon.png"} // Use appropriate icon paths
                    alt={isMuted ? "Unmute" : "Mute"}
                    style={{ width: '30px', height: '30px' }}
                />
            </div>
        </div>
    );
};

export default LoadingPage;
