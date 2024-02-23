import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ContentWrapper from "../contentWrappper/ContentWrapper";
import { useSelector } from "react-redux";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import dayjs from "dayjs";
import Genres from "../Genres";
import CircleRating from "../circularRating/CircleRating";
import { PiPlayCircleThin } from "react-icons/pi";

function DetailsBanner({video, crew}) {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { url } = useSelector((state) => state.home);

  const _genres = data?.genres?.map((g) => g.id);

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter((f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer");

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="w-full bg-black pt-[100px] mb-[50px] md:mb-0 md:pt-[120px] md:min-h-[700px]">
      {!loading ? (
        <>
          {!!data && (
            <div>
              <div className="w-full h-full absolute top-0 left-0 opacity-[0.1] overflow-hidden">
                <Img
                  className={"w-full h-full object-cover object-center"}
                  src={url.backdrop + data?.backdrop_path}
                />
              </div>
              <div className="opacity-layer w-full h-[250px]  absolute bottom-0 left-0"></div>
              <ContentWrapper>
                <div className="flex relative flex-col gap-[25px] md:gap-[50px] md:flex-row">
                  <div className=" flex-shrink-0">
                    {data.poster_path ? (
                      <Img
                        className={
                          "w-full block rounded-[12px] md:max-w-[350px]"
                        }
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <Img
                        className={
                          "w-full block rounded-[12px] md:max-w-[350px]"
                        }
                        src={PosterFallback}
                      />
                    )}
                  </div>
                  <div className="text-white">
                    <div className="text-[28px] leading-[40px] md:text-[34px] md:leading-[44px]">
                      {`${data.name || data.title} (${dayjs(
                        data.release_date
                      ).format("YYYY")})`}
                    </div>
                    <div className="text-[16px] leading-[24px] mb-[15px] italic opacity-[0.5] md:text-[20px] md:leading-[28px]">
                      {data.tagline}
                    </div>

                    <Genres
                      className={"mb-[25px] flex-wrap flex-row"}
                      data={_genres}
                    />

                    <div className="flex items-center gap-[25px] mb-[25px]">
                      <CircleRating
                        textColor={"white"}
                        className={
                          "max-w-[70px] bg-black2 rounded-[50%] md:max-w-[90px]"
                        }
                        rating={data?.vote_average.toFixed(1)}
                      />
                      <div className="flex items-center gap-[10px] cursor-pointer hover:text-pink transition-colors ease-in-out duration-[0.7s]">
                        <PiPlayCircleThin className="rounded-full md:text-[100px] text-[80px]" />
                        <span className="text-[20px] ">Watch Trailer</span>
                      </div>
                    </div>

                    <div className="mb-[25px]">
                      <div className="text-[24px] mb-[10px]">Overview</div>
                      <div className=" leading-[24px] md:pr-[100px]">
                        {data.overview}
                      </div>
                    </div>
                    <div className=" border-b border-[rgba(255,255,255,0.1)] py-[15px] flex ">
                      {data.status && (
                        <div className="mr-[10px] flex flex-wrap flex-row">
                          <span className="mr-[10px] opacity-[1] leading-[24px] font-semibold">
                            Status:{" "}
                          </span>
                          <span className="mr-[10px] opacity-[0.5] leading-[24px]">
                            {data.status}
                          </span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="mr-[10px] flex flex-wrap flex-row">
                          <span className="mr-[10px] opacity-[1] leading-[24px] font-semibold">
                            Release Date:{" "}
                          </span>
                          <span className="mr-[10px] opacity-[0.5] leading-[24px]">
                            {dayjs(data.release_date).format("MMM D, YYYY")}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="mr-[10px] flex flex-wrap flex-row">
                          <span className="mr-[10px] opacity-[1] leading-[24px] font-semibold">
                            Runtime:{" "}
                          </span>
                          <span className="mr-[10px] opacity-[0.5] leading-[24px]">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>
                    {director?.length > 0 && (
                      <div className="border-b border-[rgba(255,255,255,0.1)] py-[15px] flex">
                        <span className="mr-[10px] opacity-[1] leading-[24px] font-semibold">
                          Director: {" "}
                        </span>
                        <span className="mr-[10px] opacity-[0.5] leading-[24px]">
                          {director?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {director.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                    {writer?.length > 0 && (
                      <div className="border-b border-[rgba(255,255,255,0.1)] py-[15px] flex">
                        <span className="mr-[10px] opacity-[1] leading-[24px] font-semibold">
                          Writer: {" "}
                        </span>
                        <span className="mr-[10px] opacity-[0.5] leading-[24px]">
                          {writer?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {writer.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                    {data?.created_by?.length > 0 && (
                      <div className="border-b border-[rgba(255,255,255,0.1)] py-[15px] flex">
                        <span className="mr-[10px] opacity-[1] leading-[24px] font-semibold">
                          Creator: {" "}
                        </span>
                        <span className="mr-[10px] opacity-[0.5] leading-[24px]">
                          {data?.created_by?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {data?.created_by?.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </ContentWrapper>
            </div>
          )}
        </>
      ) : (
        <div className="flex relative flex-col gap-[25px] md:gap-[50px] md:flex-row">
          <ContentWrapper className={"flex gap-[50px]"}>
            <div className=" block flex-shrink-0 w-full rounded-xl aspect-[1/1.5] md:max-w-[350px] skeleton"></div>
            <div className="w-full">
              <div className="w-full h-[25px] rounded-[50px] mb-[25px] skeleton"></div>
              <div className=" h-[25px] rounded-[50px] mb-[50px] w-[75%] skeleton"></div>
              <div className="w-full h-[25px] rounded-[50px] mb-[25px] skeleton"></div>
              <div className="w-full h-[25px] rounded-[50px] mb-[25px] skeleton"></div>
              <div className=" h-[25px] rounded-[50px]  w-[50%] mb-[50px] skeleton"></div>
              <div className="w-full h-[25px] rounded-[50px] mb-[25px] skeleton"></div>
              <div className="w-full h-[25px] rounded-[50px] mb-[25px] skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
}

export default DetailsBanner;
