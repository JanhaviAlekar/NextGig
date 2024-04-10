import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/SpotLight";
import Link from "next/link";
import { Button } from "./ui/moving-border";


export function HeroSection(){
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-20 md:py-0">
        <Spotlight    className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"/>
        <div className=" p-8  relative z-10  w-full text-center ">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          NEXTGIG <br /> Art of Enjoying Music.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          MUSIC WAITS FOR NONE FOR WHOM YOU ARE WAITING ?? GET YOUR SEAT BELTS ON FOR THIS AMAZING JOURNEY WITH US
        </p>
        <div className="mt-8">
            <Link href={"/courses"}>
              <Button 
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                Explore more
              </Button>
            </Link>
        </div>
      </div>
    </div>
  )
}
