import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Router from "./Router.tsx";
import "./index.css";
import { store } from "./store/index.ts";
import { config } from "./utils/config.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={config.clientId}>
    <Provider store={store}>
      <Router />
    </Provider>
  </GoogleOAuthProvider>
);
