export const dynamic = "force-dynamic";

import React from "react";
import UserTable from "./(ui)/user-table";
import prisma from "@/lib/server/prisma";

/* const users: Contestants[] = [
  {
    name: "Chioma Uchenna",
    imageUrl: "cubes-male-avatar (1).png",
    points: 0,
    grade: "SS1",
    gender: "male"
  },
  {
    name: "Emeka Okoro",
    imageUrl: "cubes-male-avatar-1 (1).png",
    points: 0,
    grade: "SS2",
    gender: "male"
  },
  {
    name: "Amara Nwosu",
    imageUrl: "flexy-man-avatar (1).png",
    points: 0,
    grade: "SS3",
    gender: "female"
  },
  {
    name: "Ifeanyi Eze",
    imageUrl: "flexy-woman-avatar.png",
    points: 0,
    grade: "SS1",
    gender: "male"
  },
  {
    name: "Ngozi Chukwu",
    imageUrl: "glossy-emoji-chat-bot-happy-smiling-1.png",
    points: 0,
    grade: "SS2",
    gender: "female"
  },
  {
    name: "Uche Anozie",
    imageUrl: "glossy-emoji-chat-bot-happy-smiling-1.png",
    points: 0,
    grade: "SS1",
    gender: "male"
  },
  {
    name: "Adanna Ikenna",
    imageUrl: "glossy-emoji-chat-bot-happy-smiling-1.png",
    points: 0,
    grade: "SS3",
    gender: "female"
  },
  {
    name: "Kelechi Obasi",
    imageUrl: "glossy-emoji-chat-bot-happy-smiling-1.png",
    points: 0,
    grade: "SS2",
    gender: "male"
  },
  {
    name: "Blessing Edeh",
    imageUrl: "glossy-emoji-chat-bot-happy-smiling-1.png",
    points: 0,
    grade: "SS3",
    gender: "female"
  },
  {
    name: "Chidiebere Umeh",
    imageUrl: "flexy-woman-avatar.png",
    points: 0,
    grade: "SS1",
    gender: "male"
  }
]; */

const fetchStudents = async () => {
  const data = await prisma.student.findMany();
  return data;
};

const Page = async () => {
  const studentData = await fetchStudents();

  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className=" w-[90%] grid grid-cols-2 space-x-10  ">
        <div className="border-2 rounded-xl overflow-scroll">
          <UserTable users={studentData} />
        </div>

        <div className=" h-fit border-2 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Page;
