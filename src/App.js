import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";

//علشان حنستخدمها  useConext hook  بستدعى 
import {useContext } from "react";
//بستدعى الملف الذى يحتوى على الداتا
import DataContext from "./context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/html",
    element: <HTML />,
  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);

function App() {
  const {theme} = useContext(DataContext);
  return (
    <div className={theme}>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
