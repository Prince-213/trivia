export const dynamic = "force-dynamic";

import PositionStand from "./(ui)/position-stand";

import ChatComponent from "./(ui)/chat-component";

import { shuffleContestants } from "@/lib/actions";
import ShuffleButton from "./(ui)/shuffle-button";
import prisma from "@/lib/server/prisma";
import UserTable from "./points/(ui)/user-table";
import { Suspense } from "react";

const fetchStudents = async () => {
  const data = await prisma.student.findMany();
  return data;
};

const fetchContestants = async () => {
  const data = await prisma.trivia.findMany();
  return data;
};

export default async function Home() {
  const studentData = await fetchStudents();
  const contestantData = await fetchContestants();

  return (
    <div
      className=" w-full h-screen space-x-5 p-5 flex 
     "
    >
      <div className=" w-[40%]">
        {contestantData.length > 0 ? (
          <ChatComponent />
        ) : (
          <div className=" w-[80%] h-full mx-auto flex flex-col items-center justify-center text-center space-y-8">
            <h1
              className=" font-bold
               text-4xl"
            >
              Welcome to AI Trivia
            </h1>
            <p>
              The rules of the games are thus. Once the game is started 5 random
              contenstants will be selected for the trivia. Each contestant will
              be asked 4 riddles each. For each riddle a contestant answers
              correctly he / she is awarded 10 points.
            </p>

            <form action={shuffleContestants} className=" w-full mx-auto">
              <ShuffleButton />
            </form>
          </div>
        )}
      </div>

      <div
        className=" p-5 w-[60%] h-full rounded-xl border-2 overflow-hidden
      "
      >
        <h1 className=" mb-6 font-semibold text-2xl">Leaderboard</h1>
        <div className=" w-full   h-[60%] overflow-hidden gap-x-4 ">
          {contestantData.length > 0 ? (
            <div className=" grid gap-x-2 grid-cols-5 h-full w-full p-3 rounded-xl border-2">
              {contestantData.map((item, index) => (
                <PositionStand
                  key={index}
                  name={`${item.firstname} ${item.lastname}`}
                  points={item.points}
                  rank={1}
                  color="bg-blue-300"
                  image={item.imageUrl}
                />
              ))}
            </div>
          ) : (
            <div className=" w-full h-full  text-center flex items-center justify-center">
              <h1 className=" text-3xl font-semibold">
                The game is yet to Begin. Waiting for Selected Contestants{" "}
              </h1>
            </div>
          )}
        </div>

        <div className=" w-full h-[40%] overflow-y-scroll mt-6 pb-[5vh]">
          <Suspense fallback={<p>Fetching All Registrations...</p>}>
            <UserTable users={studentData} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
