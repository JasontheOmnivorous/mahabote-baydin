import { createSlice } from "@reduxjs/toolkit";
import { ZataMappings, ZataSlice } from "../../types/app";
import { zatas } from "../../utils/zatas";

const initialState: ZataSlice = {
  name: "",
  specifications: "",
  isLoading: false,
  error: null,
};

const zataMappings: ZataMappings = {
  တနင်္ဂနွေ: [
    "ပုတိဖွား",
    "ဘင်္ဂဖွား",
    "အထွန်းဖွား",
    "ရာဇဖွား",
    "အဓိပတိဖွား",
    "မရဏဖွား",
    "သိုက်ဖွား",
  ],
  တနင်္လာ: [
    "သိုက်ဖွား",
    "ပုတိဖွား",
    "ဘင်္ဂဖွား",
    "အထွန်းဖွား",
    "ရာဇဖွား",
    "အဓိပတိဖွား",
    "မရဏဖွား",
  ],
  အင်္ဂါ: [
    "မရဏဖွား",
    "သိုက်ဖွား",
    "ပုတိဖွား",
    "ဘင်္ဂဖွား",
    "အထွန်းဖွား",
    "ရာဇဖွား",
    "အဓိပတိဖွား",
  ],
  ဗုဒ္ဓဟူး: [
    "အဓိပတိဖွား",
    "မရဏဖွား",
    "သိုက်ဖွား",
    "ပုတိဖွား",
    "ဘင်္ဂဖွား",
    "အထွန်းဖွား",
    "ရာဇဖွား",
  ],
  ကြာသပတေး: [
    "ရာဇဖွား",
    "အဓိပတိဖွား",
    "မရဏဖွား",
    "သိုက်ဖွား",
    "ပုတိဖွား",
    "ဘင်္ဂဖွား",
    "အထွန်းဖွား",
  ],
  သောကြာ: [
    "အထွန်းဖွား",
    "ရာဇဖွား",
    "အဓိပတိဖွား",
    "မရဏဖွား",
    "သိုက်ဖွား",
    "ပုတိဖွား",
    "မရဏဖွား",
  ],
  စနေ: [
    "ဘင်္ဂဖွား",
    "အထွန်းဖွား",
    "ရာဇဖွား",
    "အဓိပတိဖွား",
    "မရဏဖွား",
    "သိုက်ဖွား",
    "ပုတိဖွား",
  ],
};

const zataSlice = createSlice({
  name: "zataSlice",
  initialState,
  reducers: {
    calculateZata: (state, action) => {
      const { burmeseBirthyear, dayOfWeek } = action.payload;

      const remainder = burmeseBirthyear % 7;
      const zataArray = zataMappings[dayOfWeek];
      if (zataArray) {
        const userZata = zatas.find(
          (item) => item.name === zataArray[remainder]
        );
        if (userZata) {
          state.name = userZata?.name;
          state.specifications = userZata?.specification;
        }
      }
    },
  },
});

export const { calculateZata } = zataSlice.actions;
export default zataSlice.reducer;
