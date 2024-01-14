import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p className="text-3xl m-2">Unauthorized!</p>
      <p className="m-2">Please log in to start using the app.</p>
      <button
        onClick={() => navigate("/")}
        className="m-2 p-2 border border-red-600 text-red-600"
      >
        ← get back to home page
      </button>
    </div>
  );
};

export default Unauthorized;
