"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  return (
    <div>
      <h2>Welcome Back!</h2>
    </div>
  );
};
