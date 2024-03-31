import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./components/Suspense/index";
import { useState } from "react";
import Services from "./pages/Services";
import Header from "./components/Header";
import Works from "./pages/Works";
import About from "./pages/About";
import Culture from "./pages/Culture";
import Feeds from "./pages/Feeds";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ContactUs />
      <Footer />
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
        element: <About />,
      },
      {
        path: "/works",
        element: <Works />,
      },
      {
        path: "/culture",
        element: <Culture />,
      },
      {
        path: "/feeds",
        element: <Feeds />,
      },
    ],
  },
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
