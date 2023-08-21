"use client";

import Image from "next/image";
import React from "react";
import { MotionDiv } from "@/components/motion";

export const Navbar = () => {
  return (
    <MotionDiv
      className="flex flex-col md:flex-row md:items-center md:justify-between py-6 border-b border-border"
      initial={{ opacity: 0, top: 20 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center space-x-4">
        <Image src="/app_logo.webp" height={40} width={40} alt="LeagueX_Logo" />
        <h1 className="font-heading text-2xl text-foreground">LeagueX</h1>
      </div>
      <div>
        <h5 className="mt-2 md:mt-0 text-foreground/70 font-semibold text-sm md:text-md font-heading tracking-wider">
          The Only Social Fantasy Sports Game
        </h5>
      </div>
    </MotionDiv>
  );
};
