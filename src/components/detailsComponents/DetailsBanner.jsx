import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import ContentWrapper from "../contentWrappper/ContentWrapper"
import { useSelector } from 'react-redux'
import Img from '../lazyLoadImage/Img'
import PosterFallback from "../../assets/no-poster.png"
import dayjs from 'dayjs'
import Genres from "../Genres"
import CircleRating from '../circularRating/CircleRating'

function DetailsBanner() {
    const {mediaType, id} = useParams()
    const {data, loading} = useFetch(`/${mediaType}/${id}`)
    const {url} = useSelector((state) => state.home)

    const _genres = data?.genres?.map((g) => g.id)

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
                        <Img className={"w-full h-full object-cover object-center"} src={url.backdrop + data?.backdrop_path} />
                    </div>
                    <div className='opacity-layer w-full h-[250px]  absolute bottom-0 left-0'></div>
                    <ContentWrapper>
                        <div className="flex relative flex-col gap-[25px] md:gap-[50px] md:flex-row">
                            <div className=" flex-shrink-0">
                                {data.poster_path ? (
                                    <Img className={"w-full block rounded-[12px] md:max-w-[350px]"} src={url.backdrop + data.poster_path} />
                                ) : (
                                    <Img className={"w-full block rounded-[12px] md:max-w-[350px]"} src={PosterFallback}/>
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
                                    
                                    <Genres className={"mb-[25px] flex-wrap flex-row"} data={_genres} />

                                    <div className="row">
                                        <CircleRating className={"max-w-[70px] bg-black2 rounded-[50%]"} rating={data?.vote_average.toFixed(1)}/>
                                    </div>

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
  )
}

export default DetailsBanner