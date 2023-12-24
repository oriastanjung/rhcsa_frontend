import React from "react";
import { useTimer } from "../context/TimeContext";
import { formatTime } from "../utils/formatToHHMM";

function SideBarTimer() {
  const { remainingTime } = useTimer();

  return (
    <div class="bg-white h-1/2 sm:w-3/12 2xl:w-1/12 px-4   py-4">
      <img className="sm:w-1/2 2xl:w-auto" src="/logo-rh.png" alt="" />
      <h1 class="font-bold mt-4">
        Red Hat Certified <br />
        System <br />
        Administrator Exam
      </h1>
      <div className="">
        <div className="mt-2  bg-amber-100 border-t border-b border-black flex justify-between">
          <p className="text-[12px]">Time Remaining : </p>
          <p className="text-sm">{formatTime(remainingTime)}</p>
        </div>
        <p class="text-[8px] mt-5">Infinite Learning Indonesia</p>
        <button class="px-3 mt-2 font-bold py-1 bg-gray-300 border w-full text-center text-xs">
          Select Language
        </button>
      </div>
    </div>
  );
}

export default SideBarTimer;
