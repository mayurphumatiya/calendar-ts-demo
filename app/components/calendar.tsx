"use client";
import cn from "@/utils/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const days = ["S", "M", "T", "W", "T", "F", "S"];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface CalendarProps {
  getCurrDate: (selectedDate: Date) => void;
  bgcolor?: string;
  text?: string;
  borderWidth?: string;
  dateHeight?: string;
  currDateBg?: string;
}
interface DateObject {
  currentMonth: boolean;
  date?: number | null;
  today: boolean;
}

export default function Calendar({
  getCurrDate,
  bgcolor,
  text,
  borderWidth,
  dateHeight,
  currDateBg,
}: CalendarProps) {
  const containerStyle = {
    backgroundColor: bgcolor ? bgcolor : "#000",
    color: text ? text : "#fff",
  };

  const borderStyle = {
    borderColor: text ? text : "#fff",
    borderBottomWidth: borderWidth ? borderWidth : "1px",
    height: dateHeight ? dateHeight : "5rem",
  };

  const currentDate = new Date();

  const generateDates = (year: number, month: number) => {
    const date = new Date();
    const firstDayOfMonth = new Date(year, month, 1);
    const startingDay = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate(); // Get total days in month

    const arrOfDates: DateObject[] = [];

    // Placeholder for empty slots
    for (let i = 0; i < startingDay; i++) {
      arrOfDates.push({
        currentMonth: false,
        date: null,
        today: false,
      });
    }

    // Fill in the days of the month
    for (let i = 1; i <= totalDaysInMonth; i++) {
      arrOfDates.push({
        currentMonth: date.getMonth() === today.getMonth(),
        date: i,
        today: date.getDate() === i,
      });
    }
    return arrOfDates;
  };
  const [today, setToday] = useState(currentDate);

  const nextMonth = () => {
    const nextMonthDate = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      1
    );
    setToday(nextMonthDate);
  };

  const previousMonth = () => {
    const previousMonthDate = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      1
    );
    setToday(previousMonthDate);
  };

  const fetchDate = (date: number) => {
    const selectedDate = new Date(today.getFullYear(), today.getMonth(), date);
    getCurrDate(selectedDate);
  };

  return (
    <>
      <div
        className="flex h-full w-full justify-center py-4"
        style={containerStyle}
      >
        <div className="lg:w-[80%] h-full w-full">
          <div className="flex justify-between">
            <h1 className="font-semibold md:text-3xl">
              {months[today.getMonth()]}, {today.getFullYear()}
            </h1>
            <div className="flex items-center gap-5 md:text-3xl">
              <ChevronLeft
                className="w-6 h-6 cursor-pointer"
                onClick={previousMonth}
              />
              <h1
                onClick={() => setToday(currentDate)}
                className="cursor-pointer"
              >
                Today
              </h1>
              <ChevronRight
                className="w-6 h-6 cursor-pointer"
                onClick={nextMonth}
              />
            </div>
          </div>
          <div
            className="w-full grid grid-cols-7 font-semibold border-b"
            style={borderStyle}
          >
            {days.map((day, index) => {
              return (
                <h1
                  className="grid place-content-center text-md"
                  style={{color: currDateBg ? currDateBg : "#DB2777"}}
                  key={index}
                >
                  {day}
                </h1>
              );
            })}
          </div>
          <div className="w-full grid grid-cols-7 ">
            {generateDates(today.getFullYear(), today.getMonth()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="h-20 border-b grid place-content-center"
                    style={borderStyle}
                    onClick={() => fetchDate(date as number)}
                  >
                    <h1
                      className={cn(
                        today &&
                          currentMonth &&
                          "bg-pink-600 rounded text-white",
                        "h-10 w-10 grid place-content-center",
                        date !== null &&
                          "rounded-full hover:bg-white hover:text-black cursor-pointer"
                      )}
                      style={{
                        backgroundColor:
                          today && currentMonth
                            ? currDateBg
                              ? currDateBg
                              : "#DB2777"
                            : "",
                      }}
                    >
                      {date !== null && date}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
}
