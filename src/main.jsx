import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { GlobalContextProvider } from "./context/globalContext.jsx";
import NavbarComponent from "./components/navbarComponent.jsx";
import BtnFilters from "./components/btnFilters.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <BrowserRouter>
      <NavbarComponent />
      <BtnFilters />
      <App />
    </BrowserRouter>
  </GlobalContextProvider>
);
