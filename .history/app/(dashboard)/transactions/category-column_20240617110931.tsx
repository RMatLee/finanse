import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

type Props = {
  id: string;
  category: string | null;
  categoryId: string | null;
};

export const AccountColumn = ({ category, categoryId }: Props) => {
  const { onOpen: onOpenAccount } = useOpenAccount();

  const onClick = () => {
    onOpenAccount(categoryId);
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center cursor-pointer hover:underline"
    >
      {category}
    </div>
  );
};
