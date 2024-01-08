import { createSlice } from "@reduxjs/toolkit";
import { ZataSlice } from "../../types/app";

const initialState: ZataSlice = {
  name: "",
  specifications: "",
  isLoading: false,
  error: null,
};

const zataSlice = createSlice({
  name: "zataSlice",
  initialState,
  reducers: {},
});

export const {} = zataSlice.actions;
export default zataSlice.reducer;
