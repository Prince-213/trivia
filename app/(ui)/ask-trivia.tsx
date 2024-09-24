"use client";

import { Loader2, SendHorizonal } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

const AskTrivia = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className=" w-10 h-10 bg-slat-green flex items-center justify-center rounded-lg"
    >
      {pending ? (
        <Loader2 className=" animate-spin" />
      ) : (
        <SendHorizonal className=" text-white" />
      )}
    </button>
  );
};

export default AskTrivia;
