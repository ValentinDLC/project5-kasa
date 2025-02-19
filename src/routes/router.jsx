import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import Header from "../Layout/Header";
import Main from "../Layout/Main";
import Footer from "../Layout/Footer";
import Apartment from "../Pages/Apartmentrental";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";

const HeaderFooterLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apartment/:id",
        element: <Apartment />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
