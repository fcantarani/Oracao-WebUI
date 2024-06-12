import HeaderComponent from "@/components/header";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <HeaderComponent />
      <div className="flex flex-col gap-4 mx-auto max-w-7xl py-10 ">
        <Outlet />
      </div>
    </>
  );
}
