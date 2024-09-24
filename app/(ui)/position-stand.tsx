"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PositionStand = ({
  name,
  points,
  color,
  image,
  rank
}: {
  name: string;
  points: number;
  color: string;
  image: string;
  rank: number;
}) => {
  return (
    <div className=" w-full h-full  flex flex-col justify-end space-y-4 ">
      <div className=" w-full flex flex-col items-center space-y-3">
        <Image src={`/${image}`} width={70} height={70} alt="" />

        <h1 className=" font-semibold">{name}</h1>
      </div>
      <motion.div
        initial={{ height: "5vh" }}
        animate={{ height: `${points}vh` }}
        className={` w-full  flex flex-col justify-end items-center rounded-tr-[1.5rem] rounded-tl-[1.5rem]  ${
          points > 5 ? "p-5" : "pt-6"
        } ${color} `}
      >
        <div className=" text-center space-y-1">
          {points > 0 && <h2 className=" font-semibold">{rank}</h2>}
          <button className=" bg-white/30 rounded-full px-2 font-semibold border-2 text-sm">
            {points} PTS
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PositionStand;
