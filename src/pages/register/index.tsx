import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { HandsPraying } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TermsOfUseDialog from "../terms-of-use";
import moment from "moment";

const registerFormSchema = z.object({
  username: z
    .string()
    .min(5, "Nome de usuário deve conter pelo menos 5 caracteres."),
  email: z
    .string()
    .min(1, "E-mail obrigatório.")
    .email("E-mail inválido.")
    .toLowerCase(),
  password: z.string().min(6, "Senha deve conter pelo menos 6 caracteres."),
});

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  function handleSubmitRegisterForm(data: RegisterFormSchema) {
    console.log("DATA====>", data);
  }

  return (
    <div className="md:h-[calc(100vh-212px)] flex flex-col justify-center">
      <div className="grid grid-cols-12">
        <div className="md:col-start-5 md:col-span-4 col-span-12 p-4 rounded-lg shadow-xl border">
          <form onSubmit={handleSubmit(handleSubmitRegisterForm)}>
            <div className="flex flex-col w-full items-center gap-6 ">
              <HandsPraying size={32} color="#0F6285" weight="fill" />
              <div className="grid w-full gap-1.5">
                <Label htmlFor="username">Nome de usuário</Label>
                <Input
                  type="text"
                  placeholder="Digite seu nome de usuário"
                  id="username"
                  className="bg-slate-100"
                  {...register("username")}
                />
                <span className="text-[0.8rem] text-neutral-500">
                  Este é o nome que será exibido em suas orações
                </span>
                {errors.username && (
                  <span className="text-[0.8rem] text-red-500">
                    {errors.username?.message}
                  </span>
                )}
              </div>

              <div className="grid w-full gap-1.5">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  type="text"
                  placeholder="Digite seu e-mail"
                  id="email"
                  className="bg-slate-100"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-[0.8rem] text-red-500">
                    {errors.email?.message}
                  </span>
                )}
              </div>
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
              <div className="flex flex-col gap-2 w-full">
                <Button type="submit">Criar conta</Button>
              </div>

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
