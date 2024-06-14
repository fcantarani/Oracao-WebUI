import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "@phosphor-icons/react";

export function HomeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-2">
          <Plus size={16} />
          Adicionar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar oração</DialogTitle>
          <DialogDescription>
            Adicionar a oração desejada para que ela possa ser visivel para
            outras pessoas.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="prayerby">Orar por</Label>
            <Input placeholder="" id="prayerby" />
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="description">Descrição</Label>
            <Textarea placeholder="" id="description" rows={8} />
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="description">Categoria</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="health">Saúde</SelectItem>
                <SelectItem value="finance">Finanças</SelectItem>
                <SelectItem value="wedding">Casamento</SelectItem>
                <SelectItem value="work">Profissão</SelectItem>
                <SelectItem value="family">Familia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="description">Tipo</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Pública</SelectItem>
                <SelectItem value="particulate">Particular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
