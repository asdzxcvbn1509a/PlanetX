import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Nav from "../Layouts/Nav";
import ThreeD from "../pages/Services/ThreeD";
import Logo from "../pages/Services/Logo";
import Illustration from "../pages/Services/Illustration";
import CharacterDesign from "../pages/Services/CharacterDesign";
import SideBar from "../Layouts/SideBar";
import Poster from "../pages/Services/Poster";
import ShirtPatternDesign from "../pages/Services/ShirtPatternDesign";
import MotionGraphic from "../pages/Services/MotionGraphic";
import Photo from "../pages/Services/Photo";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      {
        path: "services",
        element: <SideBar />,
        children: [
          { path: "three-d", element: <ThreeD /> },
          { path: "logo", element: <Logo /> },
          { path: "illustration", element: <Illustration /> },
          { path: "poster", element: <Poster /> },
          { path: "character-disign", element: <CharacterDesign /> },
          { path: "shirt-pattern-design", element: <ShirtPatternDesign /> },
          { path: "motion-ghaphic", element: <MotionGraphic /> },
          { path: "photo", element: <Photo /> },
        ],
      },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
