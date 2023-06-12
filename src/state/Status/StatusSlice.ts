import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "src/store";

// Define a type for the slice state
interface StatusState {
  loading: boolean;
}

// Define the initial state using that type
const initialState: StatusState = {
  loading: false,
};

export const statusSlice = createSlice({
  name: "status",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoading: (state: StatusState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    // decrement: (state) => {
    //   state.loading = false;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.loading += action.payload;
    // },
  },
});

export const { setLoading } = statusSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.status.value;

export default statusSlice.reducer;
