"use client";

import { Spinner } from "flowbite-react";
import { Shuffle } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

const ShuffleButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className=" w-[60%] mx-auto py-5 flex items-center justify-center  rounded-xl bg-blue-400 text-white font-semibold shadow-lg hover:shadow-sm transition-all duration-200 ease-in-out"
    >
      {pending ? (
        <div className=" flex items-center space-x-5">
          <Spinner className=" animate-spin" />
          <p>Shuffling Contestants</p>
        </div>
      ) : (
        <div className=" flex items-center space-x-5">
          <Shuffle />
          <p>Shuffle Contestants</p>
        </div>
      )}
    </button>
  );
};

export default ShuffleButton;
