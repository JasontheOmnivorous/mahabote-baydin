import { useEffect, useState } from "react";
import Unauthorized from "./Unauthorized";
import Galaxy from "./assets/galaxy.png";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { calculateBirthday } from "./store/slices/birthdaySlice";
import { calculateZata } from "./store/slices/zataSlice";

const Home = () => {
  const [date, setDate] = useState<string>("");
  const dispatch = useAppDispatch();
  const burmeseBirthyear = useAppSelector(
    (store) => store.birthday.burmeseBirthyear
  );
  const dayOfWeek = useAppSelector((store) => store.birthday.dayOfWeek);
  const zata = useAppSelector((store) => store.zata.name);
  const zataSpecifications = useAppSelector(
    (store) => store.zata.specifications
  );
  const isAuthenticated = localStorage.getItem("authToken");

  useEffect(() => {
    dispatch(calculateBirthday(date));
  }, [date]);

  useEffect(() => {
    dispatch(calculateZata({ burmeseBirthyear, dayOfWeek }));
  }, [burmeseBirthyear, dayOfWeek]);

  if (!isAuthenticated) return <Unauthorized />;

  return (
    <div className="w-auto h-auto flex flex-col items-center justify-center p-5">
      <img className="w-60 h-auto p-5" src={Galaxy} alt="galaxy" />
      <input
        className="focus:outline-red-500 p-2 rounded-xl border border-gray-400"
        onChange={(evt) => setDate(evt.target.value)}
        type="date"
      />
      <div className="m-5 text-orange-600">
        မြန်မာမွေးသက္ကရာဇ် - {burmeseBirthyear}
      </div>
      <div className={`${burmeseBirthyear ? "" : "hidden"} m-5 font-bold`}>
        <div className="m-2">
          နေ့နံ -{" "}
          <span
            className={`${
              dayOfWeek === "တနင်္ဂနွေ"
                ? "text-red-600"
                : dayOfWeek === "တနင်္လာ"
                ? "text-sky-200"
                : dayOfWeek === "အင်္ဂါ"
                ? "text-amber-900"
                : dayOfWeek === "ဗုဒ္ဓဟူး"
                ? "text-green-500"
                : dayOfWeek === "ကြာသပတေး"
                ? "text-black"
                : dayOfWeek === "သောကြာ"
                ? "text-outline"
                : dayOfWeek === "စနေ"
                ? "text-red-800"
                : ""
            } text-2xl`}
          >
            {dayOfWeek}
          </span>
        </div>
        <div className="m-2 font-bold ">ဖွားဇာတာ - {zata}</div>
        <div className="m-2">{zataSpecifications}</div>
      </div>
    </div>
  );
};

export default Home;
