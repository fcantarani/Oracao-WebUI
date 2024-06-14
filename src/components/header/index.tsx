import { Link } from "react-router-dom";
import SidebarComponent from "../sidebar";
import { ModeToggle } from "../theme-toggle";
import { SignIn } from "@phosphor-icons/react";

export default function HeaderComponent() {
  return (
    <div className="flex justify-between items-center bg-slate-900/90 h-16 w-full text-white px-8 ">
      <div className="flex justify-start items-center w-full gap-2">
        <SidebarComponent />
        <Link to="/">Oração</Link>
      </div>
      <div className="hidden md:block w-full">
        <div className="flex justify-between items-center w-full">
          <Link to="prayers">Orações</Link>
          <Link to="praying-for">Orando por...</Link>
          <Link to="my-prayers">Minhas orações</Link>
        </div>
      </div>
      <div className="flex justify-end items-center w-full gap-4">
        <Link to="login">
          <SignIn size={24} />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}
