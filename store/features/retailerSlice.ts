import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IRetailer } from "@/types/types";

export interface RetailerState {
  retailersList: IRetailer[] | null;
}

const initialState: RetailerState = {
  retailersList: null,
};

export const retailerSlice = createSlice({
  name: "retailer",
  initialState,
  reducers: {
    setRetailersList: (state, action: PayloadAction<{ data: IRetailer[] }>) => {
      console.log("retailerData = ", action.payload.data);
      state.retailersList = action.payload.data;
    },
  },
});

export const { setRetailersList } = retailerSlice.actions;

export default retailerSlice.reducer;
