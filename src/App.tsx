import { useEffect, useState } from "react";
import { useAppDispatch } from "./store/hooks";
import { calculateBirthday } from "./store/slices/birthdaySlice";

const App = () => {
  const [date, setDate] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateBirthday(date));
  }, [date]);

  return (
    <div className="w-auto h-screen flex flex-col items-center justify-center">
      <input
        className="focus:outline-red-500 p-2 rounded-xl border border-gray-400"
        onChange={(evt) => setDate(evt.target.value)}
        type="date"
      />
    </div>
  );
};

export default App;
