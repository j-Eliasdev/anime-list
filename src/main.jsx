import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { GlobalContextProvider } from "./context/globalContext.jsx";
import HeaderComponent from "./components/headerComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <BrowserRouter>
    <HeaderComponent/>
      <App />
    </BrowserRouter>
  </GlobalContextProvider>
);
