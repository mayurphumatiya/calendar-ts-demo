"use client";
import { generateDate, months } from "@/utils/calendar";
import cn from "@/utils/cn";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight, LibraryBig } from "lucide-react";
import { useEffect, useState } from "react";

const days = ["S", "M", "T", "W", "T", "F", "S"];

export default function Home() {
  const currentDate = dayjs();

  const [today, setToday] = useState(currentDate);

  useEffect(()=>{
    dayjs();
  },[])

  const nextMonth = () => {
    setToday(today.month(today.month() + 1));
  };

  const previousMonth = () => {
    setToday(today.month(today.month() - 1));
  };
  return (
    <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center">
      <div className="w-96 h-96">
        <div className="flex justify-between">
          <h1 className="font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex items-center gap-5">
            <ChevronLeft
              className="w-5 h-5 cursor-pointer"
              onClick={previousMonth}
            />
            <h1 onClick={()=> setToday(currentDate)} className="cursor-pointer">Today</h1>
            <ChevronRight
              className="w-5 h-5 cursor-pointer"
              onClick={nextMonth}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-7 text-pink-600">
          {days.map((day, index) => {
            return (
              <h1
                className="h-14 grid place-content-center text-sm"
                key={index}
              >
                {day}
              </h1>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
            return (
              <div
                key={index}
                className="h-14 border-t grid place-content-center"
              >
                <h1
                  className={cn(
                    !currentMonth && "text-gray-400",
                    today && "bg-pink-600 rounded text-white",
                    "h-10 w-10 grid place-content-center rounded-full hover:bg-white hover:text-black cursor-pointer"
                  )}
                >
                  {date.date()}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-96 h-96 px-5">
        <h1 className="flex gap-2 my-2"><LibraryBig /> HRMS Calendar</h1>
        <p>For Punch-in & Punch-out 🔥</p>
      </div>
    </div>
  );
}
