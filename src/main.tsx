import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { UserProvider } from "./contexts/userContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <App />
  </UserProvider>
);
