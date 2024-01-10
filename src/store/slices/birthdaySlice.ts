import { createSlice } from "@reduxjs/toolkit";
import { BirthdaySlice } from "../../types/app";

const initialState: BirthdaySlice = {
  burmeseBirthyear: 0,
  dayOfWeek: "",
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

      const adjustedMonth = month - 1;
      const dateObj = new Date(year, adjustedMonth, day);
      const daysOfWeek = [
        "တနင်္ဂနွေ",
        "တနင်္လာ",
        "အင်္ဂါ",
        "ဗုဒ္ဓဟူး",
        "ကြာသပတေး",
        "သောကြာ",
        "စနေ",
      ];
      state.dayOfWeek = daysOfWeek[dateObj.getDay()];

      if (month > 1 && month <= 4) {
        if (month === 4 && day <= 16) {
          state.burmeseBirthyear = year - 639;
        } else if (month === 4 && day > 16) {
          state.burmeseBirthyear = year - 638;
        } else {
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
