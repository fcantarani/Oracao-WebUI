import HomePage from "@/pages/home";
import MainPage from "@/pages/main";
import MyPrayersPage from "@/pages/my-prayers";
import PrayingForPage from "@/pages/praying-for";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "praying-for", element: <PrayingForPage /> },
      { path: "my-prayers", element: <MyPrayersPage /> },
    ],
  },
]);
