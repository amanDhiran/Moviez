import React from "react";
import CircleRating from "../circularRating/CircleRating"
import Genres from "../Genres";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './movieCard.css'
import Img from "../lazyLoadImage/Img";
import dayjs from "dayjs";
import PosterFallback from "../../assets/no-poster.png"


function MovieCard({ data, fromSearch, mediaType }) {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate()
    const posterUrl = data.poster_path
        ? url.poster + data.poster_path
        : PosterFallback;
  return (
    <div
      className="w-[calc(50%-5px)] mb-[25px] cursor-pointer flex-shrink-0 md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] movieCard"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="posterBlock relative w-full aspect-[1/1.5] bg-cover bg-center mb-[30px] flex items-end justify-between p-[10px] transition-all ease-out duration-[0.5s]">
        <Img className="w-full h-full object-cover object-center" src={posterUrl} />
        {!fromSearch && (
          <>
            <CircleRating textColor={"#04152d"} className={" rounded-[50%] p-[2px] w-[40px] h-[40px] relative top-[20px] left-[12px] bg-white flex-shrink-0 md:w-[50px] md:h-[50px]"} rating={data.vote_average.toFixed(1)} />
            <Genres className = {" m-2 hidden relative md:flex md:flex-wrap md:justify-end"} data={data.genre_ids.slice(0, 2)} />
          </>
        )}
      </div>
      <div className="text-white flex flex-col">
        <span className="text-[16px] mb-[10px] leading-6 text-ellipsis line-clamp-1 md:text-xl">{data.title || data.name}</span>
        <span className=" text-sm opacity-[0.5]">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
