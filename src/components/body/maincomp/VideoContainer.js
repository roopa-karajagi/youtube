import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../../utils/config";
import VideoCard from "../videocomp/VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos , setVideos] = useState([]);
    useEffect(() => {
        getVideos(); 
    },[]);
    
    const getVideos = async () => {
        const json = await fetch(YOUTUBE_VIDEOS_API);
        const data = await json.json();
        setVideos(data.items);
    }
    return (
        <div className="grid grid-cols-4">
            {
                videos?.map((item,index) => (
                <Link to={'/watch?v='+ item.id} key={item.id}> 
                <VideoCard  info={item} key={item.id}  />
                </Link>
                ))
            }
            
        </div>
    )
}

export default VideoContainer;