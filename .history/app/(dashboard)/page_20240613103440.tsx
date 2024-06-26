"use client";

import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

export default function Home() {
  const accountsQuery = useGetAccounts();

  return <div>
    {accountsQuery.data?.map(account) => (
      <div>
        {accountsQuery.name}
      </div>
    )
  </div>;
}
