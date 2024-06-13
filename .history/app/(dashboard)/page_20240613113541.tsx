"use client";

import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts";

export default function Home() {
  const { isOpen, onClose } = useNewAccount();

  return <div>Home Page</div>;
}
