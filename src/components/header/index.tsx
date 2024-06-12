import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <div className="flex justify-between items-center bg-slate-900/90 h-16 w-full text-white px-8 ">
      <span className="flex justify-start items-center w-full">
        <Link to="/">Oração</Link>
      </span>
      <div className="flex justify-between items-center w-full">
        <Link to="home">Home</Link>
        <Link to="praying-for">Orando por...</Link>
        <Link to="my-prayers">Minhas orações</Link>
      </div>
      <div className="flex justify-end items-center w-full gap-6">
        <span>Acessar</span>
        <span>Cadastrar</span>
      </div>
    </div>
  );
}
