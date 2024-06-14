import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Icon } from "@phosphor-icons/react";

import { ReactElement } from "react";

interface ITitleComponentProps {
  Icon: Icon;
  title: string;
  children: ReactElement;
}

export default function TitleComponent({
  Icon,
  title,
  children,
}: ITitleComponentProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full px-2"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span className="flex gap-2 items-center font-bold text-[1rem] text-orange-700">
            <Icon size={26} />
            {title}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex justify-between w-full flex-wrap gap-4">
            {children}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
