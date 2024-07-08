import React, { useEffect, useState } from "react";
import hIcon from "../../assets/sideIcon.svg";
import userIcon from "../../assets/userIcon.svg";
import searchIcon from "../../assets/search.svg";
import youTubeLogo from "../../assets/youTube.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../modules/navSlice";
import { YOUTUBE_SEARCH_API } from "../../utils/config";
import { cacheResults } from "../../modules/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions , setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector(store => store.search);

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log(suggestions);

    //update store with cahce values
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))
  };
  return (
    <div className="header_container grid grid-flow-col p-2 m-2 shadow-lg items-center gap-2">
      <div className="leftside_componenet flex col-span-1 items-center">
        <div
          className="sideMenu_container cursor-pointer"
          onClick={() => toggleHandler()}
        >
          <img src={hIcon} alt="sideMenuicon" className="w-12 h-8" />
        </div>
        <div className="youtube_logo_container">
          <img src={youTubeLogo} alt="youTube_logo" className="w-2/5" />
        </div>
      </div>
      <div className="col-span-10 px-10">
        <div className="middle_component relative flex items-center">
          <input
            className="placeholder:bold placeholder:text-xl placeholder:text-slate-400 w-3/4 bg-white border border-slate-300 rounded-l-full py-4 pr-3 pl-6 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="text"
            placeholder="Search"
            name="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}
          />
          <button className="pr-8 pl-8 text-bold text-2xl border border-slate-300 bg-gray-100 rounded-r-full py-4">
            <img src={searchIcon} alt="SearchIcon" className="w-5 h-5" />
          </button>
          </div>
          {
            showSuggestions && suggestions.length > 0 && (
            <div className="absolute bg-white py-2 px-3 w-[46rem] shadow-lg rounded-lg border border-gray-100 m-2">
              <ul>
                {
                  suggestions.map((s , index) => (
                    <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                      <img src={searchIcon} alt="SearchIcon" className="w-5 h-5 inline"/>
                      <span className="ml-3">{s}</span>
                    </li>
                  ))
                }
              </ul>
              </div>
            )
          }
        </div>
      <div className="rightside_component col-span-1">
        <img src={userIcon} alt="user-icon" className="h-8" />
      </div>
    </div>
  );
};

export default Header;
