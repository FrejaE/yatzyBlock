import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  );
}

export default App;
