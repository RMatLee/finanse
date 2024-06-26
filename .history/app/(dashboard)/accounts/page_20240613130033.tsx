import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AccountsPage = () => {
  return (
    <div>
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">
            <Button></Button>
            Accounts page
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default AccountsPage;
