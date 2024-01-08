import { createSlice } from "@reduxjs/toolkit";
import { BirthdaySlice } from "../../types/date";

const initialState: BirthdaySlice = {
  burmeseBirthyear: 0,
  isLoading: false,
  error: null,
};

const birthdaySlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    calculateBirthday: (state, action) => {
      if (!action.payload) return;

      const dateArray = action.payload.split("-");
      const year = Number(dateArray[0]);
      const month = Number(dateArray[1]);
      const day = Number(dateArray[2]);

      if (month > 1 && month <= 4) {
        if (month === 4 && day <= 16) {
          state.burmeseBirthyear = year - 639;
        } else if (month === 4 && day > 16) {
          state.burmeseBirthyear = year - 638;
        }
      } else {
        state.burmeseBirthyear = year - 638;
      }
    },
  },
});

export const { calculateBirthday } = birthdaySlice.actions;
export default birthdaySlice.reducer;
