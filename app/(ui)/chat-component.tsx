import React from "react";
import {
  File,
  Infinity,
  MoreHorizontal,
  PanelTopCloseIcon
} from "lucide-react";
import Image from "next/image";
import brain from "@/lib/assests/memphis-ai-and-artificial-neural-networks.png";
import bot from "@/lib/assests/glossy-emoji-chat-bot-happy-smiling-1.png";
import reply from "@/lib/assests/flexy-young-man-high-fives-little-robot.png";
import FadeUpIntro from "./animations/fadeupintro";
import Type from "./animations/type";

import AskTrivia from "./ask-trivia";

/* export async function askTrivia() {
  // First fetch request to localhost:3001
  const response = await fetch("http://localhost:3001/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: `Hello`
    })
  });

  const data = await response.json(); // Parse the JSON response

  // Second fetch request to localhost:3000
  const chatResponse = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: `Hello`,
      bot: data.data,
      id: `${uuidv4()}`
    })
  });

  return chatResponse.json(); // Return the final response as JSON
} */

const ChatComponent = async () => {
  return (
    <div
      className=" 
       flex flex-row flex-wrap  flex-1  h-full
     "
    >
      <div className=" h-full w-full  bg-[#edf3f3a9] rounded-xl">
        <header className=" w-full bg-body-gray flex justify-between items-center p-10  h-[10%]">
          <div className=" flex items-center space-x-4">
            <Image src={brain} width={80} height={80} alt="" />
            <div>
              <FadeUpIntro>
                <h1 className=" font-semibold text-xl">AI Trivia</h1>
              </FadeUpIntro>
            </div>
          </div>
          <MoreHorizontal />
        </header>
        <main className=" px-10 py-4 h-[90%]  ">
          <div className=" h-full flex flex-col justify-between ">
            {[1, 2].map((item, index: number) => {
              return (
                <div
                  key={index}
                  className=" w-full flex flex-col items-end space-y-8"
                >
                  <FadeUpIntro delay={0.2}>
                    <div className=" w-full rounded-lg border-2 border-slat-green/10 shadow-sm p-3 bg-body-gray">
                      <div className="  flex items-start  space-x-4">
                        <Image src={bot} width={40} height={40} alt="" />
                        <div className=" w-full  overflow-hidden">
                          <p className=" text-gray-600 text-base font-medium  ">
                            <Type content={"Hello there how are you"} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeUpIntro>

                  <FadeUpIntro delay={0.4}>
                    <div className=" flex items-center space-x-3">
                      <p>{"I'm quite good actually how are you"}</p>
                      <Image src={reply} width={100} height={100} alt="" />
                    </div>
                  </FadeUpIntro>
                </div>
              );
            })}

            <form className=" w-full p-5 flex items-center space-x-2 ">
              <button className=" w-16 h-16 rounded-xl border-slat-green/10 flex items-center justify-center border-2">
                <PanelTopCloseIcon />
              </button>
              <div className=" w-full flex items-center space-x-3 text-gray-400 border-2 border-slat-green/10 rounded-xl p-2  bg-[#E5EDEF]">
                <input
                  name="question"
                  className=" font-medium w-full h-full border-none bg-transparent outline-none"
                  placeholder="Write a message or use quick prompt "
                ></input>

                <div className=" flex items-center space-x-4">
                  <File />
                  <Infinity />
                  <AskTrivia />
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChatComponent;
