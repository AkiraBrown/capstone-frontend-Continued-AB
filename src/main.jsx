import ReactDOM from "react-dom/client";
import "./scss/styles.scss";
import AuthContextComponent from "./Components/common/context/AuthContext/AuthContext";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextComponent>
    <App />
  </AuthContextComponent>
);
