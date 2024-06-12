import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    /* grid-cols-1 for mobile, lg is for desktop */
    <div className="min=h-screen grid grid-cols-1 lg: grid-cols-2">
      <div className="h-full lg: flex flex-col items-center justify-center px-4">
        <div className="">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
