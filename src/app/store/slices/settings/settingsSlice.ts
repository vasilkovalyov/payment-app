import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/app/store/store";

export interface ISettingsState {
  currencySymbol: string;
  currencyType: string;
}

export const getSettings = (state: RootState): ISettingsState => state.settings;

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    currencyType: "USD",
    currencySymbol: "$"
  },
  reducers: {}
});

export default settingsSlice.reducer;
