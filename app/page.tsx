"use client";
import { generateDate } from "@/utils/calendar";
import cn from "@/utils/cn";

const days = ["S", "M", "T", "W", "T", "F", "S"];

export default function Home() {
  return (
    <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center">
    <div className="w-96 h-96">
      <div className="w-full grid grid-cols-7">
        {days.map((day, index) => {
          return (
            <h1 className="h-14 grid place-content-center text-sm" key={index}>
              {day}
            </h1>
          );
        })}
      </div>
      <div className="w-full grid grid-cols-7">
        {generateDate().map(({ date, currentMonth, today }, index) => {
          return (
            <div
              key={index}
              className="h-14 border-t grid place-content-center"
            >
              <h1
                className={cn(
                  !currentMonth && "text-gray-400",
                  today && "bg-purple-600 rounded text-white",
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
      <h1>Schedule for Tue Mar 4</h1>
      <p>No meetings for today</p>
    </div>
    </div>
  );
}
