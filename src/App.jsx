import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Deta from "./pages/deta.jsx";
import Root from "./pages/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "categories/:id",
    element: <Deta />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
