import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {
            title: "",
            content: "",
            tagIndex: 0,
        },
    ],
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        create: (state, action)=>{
            state.posts = [...state.posts, action.payload];
        },
    },
});

export const { create } = postSlice.actions;
export default postSlice.reducer;