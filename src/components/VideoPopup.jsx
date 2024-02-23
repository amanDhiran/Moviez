import React from "react";
import ReactPlayer from "react-player/youtube";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };
    return (
        <div className={`flex justify-center items-center w-full h-full fixed top-0 left-0 z-[9] ${show ? "opacity-[1] visible" : "opacity-0 invisible"}`}>
            <div className={`absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.25)] backdrop-blur-[3.5px]  transition-opacity duration-[400ms] ${show ? "opacity-[1]" : "opacity-0"}`} onClick={hidePopup}></div>
            <div className={`relative w-[800px] aspect-[16/9] bg-white transition-transform duration-[250ms] ${show ? "scale-[1]" : "scale-[0.2]"}`}>
                <span className={`absolute -top-[20px] right-0 text-white cursor-pointer`} onClick={hidePopup}>
                    Close
                </span>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                    // playing={true}
                />
            </div>
        </div>
    );
};

export default VideoPopup;