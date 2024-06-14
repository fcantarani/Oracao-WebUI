import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function TermsOfUseDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Termos de uso</Button>
      </DialogTrigger>
      <DialogContent className="w-full gap-4">
        <DialogHeader>
          <DialogTitle>Termos de uso</DialogTitle>
          <DialogDescription>
            Bem-vindo ao nosso site! Ao acessar e utilizar este site, você
            concorda com os seguintes termos e condições. Por favor, leia com
            atenção.
          </DialogDescription>
        </DialogHeader>
        <div className="text-[0.875rem]">
          <ul className="flex flex-col gap-5">
            <li>
              <strong>Cadastro:</strong> Para solicitar pedidos de orações, é
              necessário se cadastrar preenchendo corretamente as informações
              solicitadas. Você concorda em fornecer dados verdadeiros e
              atualizados.
            </li>
            <li>
              <strong>Pedidos de Oração:</strong> Os pedidos de orações podem
              ser feitos para outras pessoas ou para si próprio. Respeite a
              privacidade e sensibilidade das informações compartilhadas.
            </li>
            <li>
              <strong>Privacidade:</strong> Comprometemo-nos a proteger a sua
              privacidade. Todas as informações pessoais serão tratadas de
              acordo com as leis de privacidade vigentes e normas
              internacionais.
            </li>
            <li>
              <strong>Responsabilidades:</strong> O site não se responsabiliza
              pela veracidade dos pedidos de orações feitos pelos usuários. Cabe
              a cada pessoa discernir e decidir sobre o conteúdo compartilhado.
            </li>
            <li>
              <strong>Comportamento:</strong> Todos os usuários devem agir com
              respeito, empatia e consideração ao interagir no site.
              Comportamentos inadequados não serão tolerados.
            </li>
            <li>
              <strong>Alterações nos Termos:</strong> Reservamos o direito de
              alterar estes termos de uso a qualquer momento. Recomendamos que
              você revise regularmente os termos para estar ciente de possíveis
              atualizações.
            </li>
          </ul>
        </div>
        <DialogFooter>
          <div className="flex flex-col gap-4">
            <DialogDescription className="flex bg-yellow-200 text-yellow-900 rounded-lg p-4 w-full font-bold">
              Ao continuar a utilizar este site, você indica que leu,
              compreendeu e concorda com estes termos de uso. Se tiver dúvidas
              ou preocupações, entre em contato conosco.
            </DialogDescription>
            <DialogClose asChild>
              <Button variant={"destructive"} type="submit" className="w-full">
                Fechar
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
