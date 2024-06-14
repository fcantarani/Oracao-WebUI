import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <div className="bg-gradient-to-bl from-slate-600 to-blue-300 h-screen w-full flex flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-[2.5rem]">Ops!!</h1>
      <span className="text-[1.25rem]">
        Um erro foi identificado. Tente novamente.
      </span>
      <Button variant={"secondary"} onClick={() => window.history.go(-1)}>
        Voltar
      </Button>
    </div>
  );
}
