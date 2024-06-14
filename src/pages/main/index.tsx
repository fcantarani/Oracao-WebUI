import HeaderComponent from "@/components/header";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="h-full">
      <HeaderComponent />
      <div className="grid grid-cols-12 gap-4 py-6 ">
        <div className="col-span-10 col-start-2 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
