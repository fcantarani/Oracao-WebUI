import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HandsPraying } from "@phosphor-icons/react";
import moment from "moment";

export default function LoginPage() {
  return (
    <div className="md:h-[calc(100vh-212px)] flex flex-col justify-center">
      <div className="grid grid-cols-12">
        <div className="md:col-start-5 md:col-span-4 col-span-12 p-4 rounded-lg shadow-xl border">
          <div className="flex flex-col w-full items-center gap-6 ">
            <HandsPraying size={32} color="#0F6285" weight="fill" />
            <div className="grid w-full gap-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                placeholder=""
                id="email"
                className="bg-slate-100"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                placeholder=""
                id="password"
                className="bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="w-full bg-[#ECCCA2] rounded-lg px-3 py-1 items-center flex justify-center text-[0.9rem]">
                Cadastrar
              </span>
              <span className="w-full bg-[#616E83] text-white rounded-lg px-3 py-1 items-center flex justify-center text-[0.9rem]">
                Acessar
              </span>
            </div>

            <span className="text-[0.875rem] text-blue-600 hover:underline hover:cursor-pointer">
              Esqueceu sua senha?
            </span>

            <div className="flex flex-col items-center gap-2 w-full">
              <span className="text-[0.875rem] text-blue-600 hover:underline hover:cursor-pointer">
                Termos de uso
              </span>

              <div className="text-[0.75rem]">
                <span>{moment().year()} - Oração</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
