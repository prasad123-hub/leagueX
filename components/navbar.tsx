"use client";

import Image from "next/image";
import React from "react";
import { MotionDiv } from "@/components/motion";

export const Navbar = () => {
  return (
    <MotionDiv
      className="flex flex-col border-b border-border py-6 md:flex-row md:items-center md:justify-between"
      initial={{ opacity: 0, top: 20 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center space-x-4">
        <Image src="/app_logo.webp" height={40} width={40} alt="LeagueX_Logo" />
        <h1 className="font-heading text-2xl text-foreground">LeagueX</h1>
      </div>
      <div>
        <h5 className="md:text-md mt-2 font-heading text-sm font-semibold tracking-wider text-foreground/70 md:mt-0">
          The Only Social Fantasy Sports Game
        </h5>
      </div>
    </MotionDiv>
  );
};
