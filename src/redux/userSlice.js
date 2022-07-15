import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Hoang Khoi",
    userName: "anhkhoi123",
    bio: "Free Your Mind",
    avaUrl: "https://newsmd2fr.keeng.net/tiin/archive/imageslead/2022/03/29/90_3289e976177c1b19264383cf21b598bf.jpg",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        update: (state, action)=>{
            state.name = action.payload.name;
            state.userName = action.payload.userName;
            state.bio = action.payload.bio;
            state.avaUrl = action.payload.avaUrl;
        },
    },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;