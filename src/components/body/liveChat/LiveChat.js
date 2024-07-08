import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../modules/chatSlice";
import userIcon from '../../../assets/userIcon.svg';
import { GOOGLE_API_KEY, YOUTUBE_GET_API } from "../../../utils/config";

const LiveChat = () => {

    const [liveStreamingId , setLiveStreamingId] = useState('');
    const [livechatDetails , setLiveChatDetails] = useState([]);
    const [liveMessage , setLiveMessage] = useState('');

        const dispatch = useDispatch();
        const storeLiveMessage = useSelector(store => store.chat.messages);
        // console.log("live Messafes" , liveMessages);

    useEffect(() => {
        getLiveStreamId(); 
    },[]);
    
    const getLiveStreamId = async () => {
        const json = await fetch(YOUTUBE_GET_API);
        const data = await json.json();
        // console.log("livestreamdata" , data);
        setLiveStreamingId(data.items[0].liveStreamingDetails.activeLiveChatId)
    }

    useEffect(()=> {
        let i;
        if(liveStreamingId) {
           i = setInterval(() => {
            getLiveChat();
           } ,20000)
        }
        return  () => clearInterval(i);
    }, [liveStreamingId]);

    const getLiveChat = async() => {
        const json = await fetch(`https://youtube.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${liveStreamingId}&part=snippet%2CauthorDetails%2Cid&key=${GOOGLE_API_KEY}`);
        const liveChat = await json.json();
        // console.log("live CHat" , liveChat.items.length);
        dispatch(addMessage(liveChat.items));
       setLiveChatDetails(liveChat.items);
        }

    const handleInputSubmit = (e , value) => {
        e.preventDefault();
        console.log("input" , value);
        dispatch(
            addMessage([{
                authorDetails: {
                    displayName: "Testing",
                    profileImageUrl:{userIcon}
                },
                id: "LCC.vbadifceifcha123",
                snippet: {
                    displayMessage: value
                }
            }])
        );
        setLiveMessage('');
    }
    return (
        <>
        <div className="border border-black h-[600px] p-2 rounded-lg bg-slate-100 overflow-auto"> 
        {
            storeLiveMessage.length > 0 && (
                storeLiveMessage.map((c,index) => {
                    console.log("each live mesage" , c);
                    return c.map((ca, i) => {
                        return (
                            <ChatMessage name={ca.authorDetails.displayName} message={ca.snippet.displayMessage} profileImage={ca.authorDetails.profileImageUrl} key={ca.id}/>
                        )
                    })
                   
                })
            )
        }
        </div>
        <form className="w-full p-2 my-2 border border-black rounded-lg flex" onSubmit={(e) => handleInputSubmit(e ,liveMessage)}>
            <input type="text" className="border border-black w-72 p-2" value={liveMessage} onChange={(e)=> setLiveMessage(e.target.value)}/>
            <button type="submit" className="px-4 mx-2 border bg-green-300 rounded-md">Send</button>
        </form>
        </>
    )
}

export default LiveChat;