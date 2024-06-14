"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

type Props = {
  id: string;
};

export const Actions = ({ id }: Props) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </>
  );
};
