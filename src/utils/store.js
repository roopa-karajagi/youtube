import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "../modules/navSlice";
import searchSlice from "../modules/searchSlice";
import chatSlice from "../modules/chatSlice";

const store =  configureStore({
    reducer: {
        menu: NavSlice,
        search: searchSlice,
        chat: chatSlice
    }
})

export default store;