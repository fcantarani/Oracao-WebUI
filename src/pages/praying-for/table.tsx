import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash } from "@phosphor-icons/react";

export default function PrayingForTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10%]">ID</TableHead>
          <TableHead className="w-[20%]">Oração</TableHead>
          <TableHead className="w-[25%]]">Descrição</TableHead>
          <TableHead className="w-[20%]">Categoria</TableHead>
          <TableHead className="w-[10%]">Criado em</TableHead>
          <TableHead className="w-[15%] text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
          <TableCell className="flex justify-end gap-4">
            <Button className="bg-red-400/80">
              <Trash size={16} />
            </Button>

            <Button className="bg-yellow-400/80">
              <Pencil size={16} />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
