"use client";

import React from "react";
import { ReactTyped } from "react-typed";

const Type = ({ content }: { content: string }) => {
  return <ReactTyped strings={[content]} typeSpeed={10} />;
};

export default Type;
