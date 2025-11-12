import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IinitialState {
  showLoader: boolean;
  appId: string;
}

// Define the initial state using that type
const initialState: IinitialState = {
  appId: "appid",
  showLoader: false,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setShowLoader: (state, action: PayloadAction<boolean>) => {
      state.showLoader = action.payload;
    },
    setAppId: (state, action: PayloadAction<string>) => {
      state.appId = action.payload;
    },
  },
});

export const { setAppId, setShowLoader } = configSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getAppId = (state: RootState) => state?.config.appId;
export const showLoaderState = (state: RootState) => state?.config.showLoader;

export default configSlice.reducer;
