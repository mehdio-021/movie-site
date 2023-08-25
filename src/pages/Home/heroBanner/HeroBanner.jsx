import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HeroBanner.scss";

import useFetch from "../../../hooks/useFetch";
import Img from './../../../components/lazyLoadImage/Img';
import ContentWrapper from './../../../components/contentWrapper/ContentWrapper';




const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((store) => store.home);
  const { data, loading,error } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results
      ?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  const searchQueryHandler = (event) => {
    if (query.length > 0 && event.key === "Enter"  ) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
    {
        !loading &&(
            <div className="backdrop-img">
                <Img  src={background}/>
            </div>
        )
    }
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="search for a movie or tv show..."
              onChange={(event) => setQuery(event.target.value)}
              value={query}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
        </ContentWrapper>
      
    </div>
  );
};

export default HeroBanner;
