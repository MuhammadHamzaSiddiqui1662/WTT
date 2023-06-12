import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "src/store";

// Define a type for the slice state
interface StatusState {
  loading: boolean;
  splashHide: boolean;
}

// Define the initial state using that type
const initialState: StatusState = {
  loading: false,
  splashHide: false,
};

export const statusSlice = createSlice({
  name: "status",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoading: (state: StatusState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSplashHide: (state: StatusState, action: PayloadAction<boolean>) => {
      state.splashHide = action.payload;
    },
  },
});

export const { setLoading, setSplashHide } = statusSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.status.loading;
export const selectSplashHide = (state: RootState) => state.status.splashHide;

export default statusSlice.reducer;
