export const dynamic = "force-dynamic";

import { addStudent } from "@/lib/actions";
import React from "react";
import SubmitButton from "./(ui)/submit-button";

const Page = () => {
  return (
    <div className=" w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className=" font-semibold text-3xl text-center">
        Trivia Game Registration
      </h1>
      <br />
      <div className=" w-[60%] p-10 rounded-xl border-2">
        <form action={addStudent} className=" grid-cols-2 grid gap-10">
          <div className=" flex flex-col space-y-2">
            <label htmlFor="firstname">First Name</label>

            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter First Name..."
            />
          </div>

          <div className=" flex flex-col space-y-2">
            <label htmlFor="lastname">Last Name</label>

            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter Last Name..."
            />
          </div>

          <div className=" flex flex-col space-y-2">
            <label htmlFor="gender">Gender</label>

            <select id="gender" name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className=" flex flex-col space-y-2">
            <label htmlFor="class">Class</label>

            <select id="class" name="class">
              <option value="jss1">Jss1</option>
              <option value="jss2">Jss2</option>
              <option value="jss3">Jss3</option>
              <option value="ss1">SS1</option>
              <option value="ss2">SS2</option>
              <option value="ss3">SS3</option>
            </select>
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default Page;
