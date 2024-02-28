import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchDataFromApi from "../utils/api";
import MovieCard from "../components/movieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import noResults from "../assets/no-results.png";
import ContentWrapper from "../components/contentWrappper/ContentWrapper";

function SearchResult() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [pageNum, setPageNum] = useState(1);
  const { query } = useParams();

  function fetchInitialData() {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  }

  function fetchNextPageData() {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  }

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);
  return (
    <div className=" min-h-[700px] pt-[100px]">
      {loading && <p>loading</p>}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className=" text-2xl leading-[34px] text-white mb-[25px]">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="flex flex-wrap flex-row gap-[10px] mb-[50px] md:gap-5"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={loading}
              >
                {data?.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="text-2xl text-black-light">Sorry, Results not found!</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
}

export default SearchResult;
