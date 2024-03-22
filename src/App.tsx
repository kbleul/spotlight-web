import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./components/Suspense/index";
import { useState } from "react";
import Services from "./pages/Services";
import Header from "./components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
  // {
  //   path: "services",
  //   element: <Services />,
  // },
  // {
  //   path: "about",
  //   element: <div>About</div>,
  // },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loading setIsLoading={setIsLoading} />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
