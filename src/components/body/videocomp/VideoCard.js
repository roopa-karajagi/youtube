const VideoCard = ({info}) => {
    const {snippet , statistics} = info;
    const {channelTitle , title , thumbnails} = snippet;
    return (
        <div className="m-5 p-5 w-auto shadow-lg">
            <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg"/>
            <ul>
                <li className="font-bold text-lg py-2 break-words"> {title}</li>
                <li className="text-base">{channelTitle}</li>
                <li className="text-base">{statistics?.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;