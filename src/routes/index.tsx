import MainPage from "@/pages/main";
import MyPrayersPage from "@/pages/my-prayers";
import PrayingForPage from "@/pages/praying-for";
import { createBrowserRouter } from "react-router-dom";
import PrayersPage from "@/pages/prayers";
import HomePage from "@/pages/home";
import ErrorPage from "@/pages/error";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "prayers", element: <PrayersPage /> },
      { path: "praying-for", element: <PrayingForPage /> },
      { path: "my-prayers", element: <MyPrayersPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);
