import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min=h-screen grid grid-cols-1">
      <SignIn />
    </div>
  );
}
