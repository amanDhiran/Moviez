import React, {useState} from 'react'
import ContentWrapper from '../contentWrappper/ContentWrapper'
import VideoPopup from "../VideoPopup"
import Img from '../lazyLoadImage/Img'
import { PiPlayCircleThin } from "react-icons/pi";

const VideoSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="w-[150px] flex-shrink-0 md:w-[25%]">
                <div className="w-full aspect-[16/9] rounded-[12px] mb-[10px] skeleton"></div>
                <div className="h-[20px] w-full rounded-[10px] mb-[10px] skeleton"></div>
                <div className="h-[20px] w-[75%] rounded-[10px] skeleton"></div>
            </div>
        );
    };

    return (
        <div className="relative mb-[50px]">
            <ContentWrapper>
                <div className="text-[24px] text-white mb-[25px]">Official Videos</div>
                {!loading ? (
                    <div className="flex gap-[10px] overflow-x-auto -mr-5 -ml-5 px-5 md:gap-[20px] md:m-0 md:p-0">
                        {data?.results?.map((video) => (
                            <div
                                key={video.id}
                                className="w-[150px] flex-shrink-0 md:w-[25%] cursor-pointer"
                                onClick={() => {
                                    setVideoId(video.key);
                                    setShow(true);
                                }}
                            >
                                <div className="mb-[15px] relative">
                                    <Img
                                        className={"w-full block rounded-[12px] transition-all ease-in-out duration-[0.7s]"}
                                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                    />
                                    <PiPlayCircleThin className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] hover:text-pink" />
                                </div>
                                <div className="text-white text-[14px] leading-[20px] md:text-base ">{video.name}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex gap-[10px] overflow-x-auto -mr-5 -ml-5 px-5 md:gap-[20px] md:m-0 md:p-0">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideoSection