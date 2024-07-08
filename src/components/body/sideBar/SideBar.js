import React from "react";
import "./sidebar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  //early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="sidebar-component col-span-1 p-5 m-2 shadow-lg border divide-y">
      <div className="first-tile">
        <div>
        <Link to="/">
          Home
        </Link>
        </div>
        <div>Shotrs</div>
        <div>Subscriptios</div>
      </div>
      <div className="sec-tile mb-4">
        <div className="mt-4">Library</div>
        <div>History</div>
        <div>Watch Later</div>
        <div>Liked Videos</div>
      </div>
      <div className="third-tile mb-4">
        <h1 className="mt-4 font-bold">Explore</h1>
        <ul className="p-2">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
