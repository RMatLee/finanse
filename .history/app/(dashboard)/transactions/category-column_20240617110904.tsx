import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

type Props = {
  category: string;
  categoryId: string;
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
