/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import toast from "react-hot-toast";

const page: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    try {
      setIsLoading(true);
      await signIn("google");
    } catch (error) {
      toast.error("Something went wrong with you login");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="intems-center flex min-h-full justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-md flex-col items-center space-y-8">
          <div className="flex flex-col items-center gap-8">
            {/* TODO: logo */}
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <Button
            isLoading={isLoading}
            type="button"
            className="mx-auto w-full max-w-sm items-center justify-center"
            onClick={loginWithGoogle}
          >
            {isLoading ? null : <Icons.google />}Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
