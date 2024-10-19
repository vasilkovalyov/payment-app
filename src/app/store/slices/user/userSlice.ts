import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/app/store/store";

export interface IUserState {
  name: string;
  balance: number;
  notificationLength: number;
  avatar: string;
  percent: number;
}

export const getUser = (state: RootState): IUserState | null => state.user;

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "User name",
    balance: 125.02,
    notificationLength: 5,
    avatar: "/images/avatar.jpeg",
    percent: 13
  },
  reducers: {}
});

export default userSlice.reducer;
