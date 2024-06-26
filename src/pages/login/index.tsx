import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { HandsPraying } from "@phosphor-icons/react";
import moment from "moment";
import { Link } from "react-router-dom";
import TermsOfUseDialog from "../terms-of-use";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  function handleSubmitLoginForm(data: LoginFormSchema) {
    console.log("DATA====>", data);
  }

  return (
    <div className="md:h-[calc(100vh-212px)] flex flex-col justify-center">
      <div className="grid grid-cols-12">
        <div className="md:col-start-5 md:col-span-4 col-span-12 p-4 rounded-lg shadow-xl border">
          <form onSubmit={handleSubmit(handleSubmitLoginForm)}>
            <div className="flex flex-col w-full items-center gap-6 ">
              <HandsPraying size={32} color="#0F6285" weight="fill" />
              <div className="grid w-full gap-1.5">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  type="email"
                  placeholder="Digite seu e-mail"
                  id="email"
                  className="bg-slate-100"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <span className="text-[0.8rem] text-red-500">
                  {errors.email?.message}
                </span>
              )}

              <div className="grid w-full gap-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input
                  type="password"
                  placeholder="Digite a sua senha"
                  id="password"
                  className="bg-slate-100"
                  {...register("password")}
                />
                {errors.password && (
                  <span className="text-[0.8rem] text-red-500">
                    {errors.password?.message}
                  </span>
                )}
              </div>
              <div className="flex gap-2 w-full">
                <span className="w-full bg-[#ECCCA2] rounded-md px-3 py-2 items-center flex justify-center text-[0.9rem]">
                  <Link to="/register">Cadastrar</Link>
                </span>
                <span className="w-full bg-[#616E83] text-white rounded-lg px-3 py-1 items-center flex justify-center text-[0.9rem]">
                  Acessar
                </span>
              </div>

              <span className="text-[0.875rem] text-blue-600 hover:underline hover:cursor-pointer">
                Esqueceu sua senha?
              </span>

              <Separator />

              <div className="flex flex-col items-center gap-2 w-full">
                <TermsOfUseDialog />

                <div className="text-[0.75rem]">
                  <span>{moment().year()} - Oração</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
