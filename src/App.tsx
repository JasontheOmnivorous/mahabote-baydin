import { useGoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      Cookies.set("authToken", tokenResponse.access_token, { expires: 7 });
      navigate("/home");
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <p className="m-10 text-2xl text-red-700">
          Find out more about yourself using burmese astrology.
        </p>
        <img
          className="m-8 w-[90%] lg:w-[80%] md:w-[80%] h-auto rounded-xl shadow-lg"
          src="https://asiasociety.org/mahabote_quiz/full_zodiac.jpg"
          alt="astrology-themed-pic"
        />
        <p className="m-10 text-3xl text-amber-700">
          Where ancient wisdom meets technology.
        </p>
        <button
          onClick={() => login()}
          className="border border-amber-700 p-2 mb-8 text-amber-700 rounded-md hover:border-amber-500 hover:text-amber-500"
        >
          Sign in to start exploring →
        </button>
      </div>
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute bottom-0 left-0"
          role="alert"
        >
          <strong className="font-bold">Holy smokes!</strong>
          <span className="block sm:inline">
            Your Google credentials aren't working.
          </span>
          <button onClick={() => setError(false)}>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
