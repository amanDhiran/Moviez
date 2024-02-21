import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "./carousel.css"
import CircleRating from "../../circularRating/CircleRating";
import ContentWrapper from "../contentWrappper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png"
import Genres from "../Genres";

function Carousel({data, loading}) {
  const carouselContainer = useRef()
  const {url} = useSelector((state) => state.home)
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;

        const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
  }

  const skItem = () => {
    return (
      <div className="w-[125px] md:w-carousel-item-md lg:w-carousel-item-lg flex-shrink-0">
        <div className="rounded-[12px] w-full aspect-[1/1.5] mb-[30px] skeleton"></div>
        <div className="flex flex-col">
          <div className="skeleton w-full h-[20px] mb-[10px]"></div>
          <div className="w-[75%] skeleton h-[20px]"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-[50px]">
      <ContentWrapper className={"relative"}>
        <BsFillArrowLeftCircleFill 
          className="text-[30px] text-black absolute top-[44%] -translate-y-[50%] cursor-pointer z-[1] hidden md:block left-[30px] opacity-80 hover:opacity-100"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="text-[30px] text-black absolute top-[44%] -translate-y-[50%] cursor-pointer z-[1] hidden md:block right-[30px] opacity-80 hover:opacity-100" 
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="flex gap-[10px] overflow-y-hidden -mr-5 -ml-5 px-[20px] md:gap-[20px]  md:m-0 md:p-0" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback
              return (
                <div 
                  key={item.id}
                  className="w-[125px] cursor-pointer md:w-carousel-item-md lg:w-carousel-item-lg flex-shrink-0"
                  onClick={() => navigate(`/${item.media_type}/${item.id}`)}
                  >
                    <div className="relative w-full aspect-[1/1.5] bg-cover bg-center mb-[30px] flex items-end justify-between ">
                      <Img className={"w-full h-full object-cover object-center"} src={posterUrl} />
                      <CircleRating className={"w-[40px] h-[40px] relative top-[20px] left-[12px] bg-white flex-shrink-0 md:w-[40px] md:h-[40px]"} rating={item?.vote_average.toFixed(1)}/>
                      <Genres className = {" m-2 hidden relative md:flex md:flex-wrap md:justify-end"} data={item.genre_ids.slice(0,2)} />
                    </div>
                    <div className="text-white flex flex-col">
                      <span className="text-[16px] mb-[10px] leading-[24px] md:text-[20px] text-ellipsis line-clamp-1">
                        {item.title || item.name}
                      </span>
                      <span className="text-[14px] opacity-[0.5]">
                        {dayjs(item.release_Date).format("MMM D, YYYY")}
                      </span>
                    </div>

                </div>
              )
            })}
          </div>
        ) : (
          <div className="flex gap-[10px] overflow-y-hidden -mr-5 -ml-5 px-5 md:gap-[20px] overflow-hidden m-0 p-0">
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  )
}

export default Carousel