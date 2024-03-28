import React, { useState, useEffect } from "react";
import ContentWrapper from "../components/contentWrappper/ContentWrapper";
import MovieCard from "../components/movieCard/MovieCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function WatchList() {
  const { watchListMovies } = useSelector((state) => state.watchList);

  const { mediaType } = useParams();

  return (
    <div className="min-h-[700px] pt-[100px]">
      <ContentWrapper>
        <div className="flex justify-between mb-[25px] flex-col md:flex-row">
          <div className="text-[24px] leading-[34px] text-white mb-5 md:mb-0">
            Watch List
          </div>
        </div>
            {watchListMovies?.length > 0 ? (
              <div
                className="flex flex-row flex-wrap gap-[10px] mb-[50px] md:gap-5"
              >
                {watchListMovies?.map((item, index) => {
                  return (
                    <MovieCard key={index} data={item} mediaType={mediaType} />
                  );
                })}
              </div>
            ) : (
              <span className="text-2xl text-black-light">Your Watch List is empty!</span>
            )}
      </ContentWrapper>
    </div>
  );
}

export default WatchList;
