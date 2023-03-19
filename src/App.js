import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router/router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
