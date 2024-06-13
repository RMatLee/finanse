"use client";

import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts";

export default function Home() {
  const { isOpen, onClose } = useNewAccount();

  return (
    <div>
      <Button onClick={onOpen}>Add an account</Button>
    </div>
  );
}
