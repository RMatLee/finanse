import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  account: string | null;
  accountId: string | null;
};

export const AccountColumn = ({ id, account, accountId }: Props) => {
  const { onOpen: onOpenAccount } = useOpenAccount();

  return (
    <div className="flex items-center cursor-pointer hover:underline">
      {account}
    </div>
  );
};
