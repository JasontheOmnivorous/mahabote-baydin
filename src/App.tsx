import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { calculateBirthday } from "./store/slices/birthdaySlice";
import { calculateZata } from "./store/slices/zataSlice";

const App = () => {
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

  useEffect(() => {
    dispatch(calculateBirthday(date));
  }, [date]);

  useEffect(() => {
    dispatch(calculateZata({ burmeseBirthyear, dayOfWeek }));
  }, [burmeseBirthyear, dayOfWeek]);

  return (
    <div className="w-auto h-auto flex flex-col items-center justify-center p-5">
      <input
        className="focus:outline-red-500 p-2 rounded-xl border border-gray-400"
        onChange={(evt) => setDate(evt.target.value)}
        type="date"
      />
      <div className="m-5 text-orange-600">
        မြန်မာမွေးသက္ကရာဇ် - {burmeseBirthyear}
      </div>
      <div className={`${burmeseBirthyear ? "" : "hidden"} m-5 font-bold`}>
        <div className="m-2">နေ့နံ - {dayOfWeek}</div>
        <div className="m-2 font-bold">ဖွားဇာတာ - {zata}</div>
        <div className="m-2">{zataSpecifications}</div>
      </div>
    </div>
  );
};

export default App;
