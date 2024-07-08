import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../../modules/navSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../../comments/CommentsContainer";
import LiveChat from "../liveChat/LiveChat";

const WatchVideo = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log("searchparams" , searchParams.get('v'))

  const dispatch = useDispatch();
  const navbar = useSelector(store => store.menu.isMenuOpen);
  console.log("navbar" , navbar);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
    <div  className={`flex ${navbar === true ? 'w-[1000px]' : 'w-full'}`}>
    <div className='p-2 m-2'>
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + searchParams.get('v') + "?si=XJDQXrwQjFIIRK7r"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={`${navbar === true ? 'w-[1000px] ml-5' : 'w-[1200px]'}`}
      ></iframe>
    </div>
    <div className={`p-2 m-2 ${navbar === true ? 'w-96' : 'w-full'}`}>
    <LiveChat />
    </div>
    </div>
    <CommentsContainer />
    </div>
  );
};


export default WatchVideo;
