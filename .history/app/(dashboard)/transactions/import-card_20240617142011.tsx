import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const dateFormat = "yyyy-MM-dd HH:mm:ss";
const outputFormat = "yyyy-MM-dd";

const requiredOptions = ["amount", "date", "payee"];

interface SelectedColumnState {
  [key: string]: string | null;
}

type Props = {
  data: string[][];
  onCancel: () => void;
  onSubmit: (data: any) => void;
};

export const ImportCard = ({ data, onCancel, onSubmit }: Props) => {
  return (
    <div className="mx-auto -mt-6 w-full max-w-screen-2xl pb-10">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="line-clamp-1 text-xl">
            Import Transaction
          </CardTitle>

          <div className="flex flex-col items-center gap-x-2 gap-y-2 lg:flex-row">
            <Button size="sm" onClick={() => {}} className="w-full lg:w-auto">
              Cancel
            </Button>
          </div>
        </CardHeader>

        <CardContent>Hello</CardContent>
      </Card>
    </div>
  );
};
