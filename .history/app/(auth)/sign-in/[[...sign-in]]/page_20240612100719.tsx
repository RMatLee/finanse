import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    /* grid-cols-1 for mobile, lg is for desktop */
    <div className="min=h-screen grid grid-cols-1 lg: grid-cols-2">
      <div>
        <SignIn />
      </div>
    </div>
  );
}
