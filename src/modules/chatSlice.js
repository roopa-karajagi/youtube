import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utils/config";

const ChatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers: {
        addMessage: (state,action) => {
            state.messages.splice( 0, LIVE_CHAT_COUNT)
            state.messages.push(action.payload);
        }
    }
})

export const {addMessage} = ChatSlice.actions; 
export  default ChatSlice.reducer;