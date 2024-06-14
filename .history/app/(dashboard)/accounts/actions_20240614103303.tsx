"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  id: string;
};

export const Actions = ({ id }: Props) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button></Button>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </>
  );
};
