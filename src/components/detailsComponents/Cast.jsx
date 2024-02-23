import React from "react";
import { useSelector } from "react-redux";

import ContentWrapper from "../../components/contentWrappper/ContentWrapper";
import Img from "../../components/lazyLoadImage/Img";
import avatar from "../../assets/avatar.png";

const Cast = ({ data, loading }) => {
    const { url } = useSelector((state) => state.home);

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="w-[125px] h-[125px] rounded-[50%] mb-[15px] md:w-[175px] md:h-[175px] md:mb-[25px] skeleton"></div>
                <div className="w-full h-[20px] rounded-[10px] mb-[10px] skeleton"></div>
                <div className="w-[75%] h-[20px] rounded-[10px] mx-auto skeleton"></div>
            </div>
        );
    };
    return (
        <div className="relative mb-[50px]">
            <ContentWrapper>
                <div className="text-[24px] text-white mb-[25px]">Top Cast</div>
                {!loading ? (
                    <div className="flex gap-[20px] overflow-y-hidden -mr-5 -ml-5 px-5 md:m-0 md:p-0">
                        {data?.map((item) => {
                            let imgUrl = item.profile_path
                                ? url.profile + item.profile_path
                                : avatar;
                            return (
                                <div key={item.id} className=" text-center text-white">
                                    <div className="w-[125px] h-[125px] rounded-[50%] overflow-hidden mb-[15px] md:w-[175px] md:h-[175px] md:mb-[25px]">
                                        <Img className={"w-full h-full object-cover object-top"} src={imgUrl} />
                                    </div>
                                    <div className="text-[14px] leading-[20px] font-semibold md:text-xl md:leading-[24px]">{item.name}</div>
                                    <div className="text-[14px] leading-[20px] opacity-[0.5] md:text-xl md:leading-[24px]">
                                        {item.character}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="flex gap-[20px] overflow-y-hidden -mr-5 -ml-5 px-5 md:m-0 md:p-0">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Cast;