'use client'

import Calendar from "@mayurphumatiya/calendar-ts"

export default function Home() {

  const getSelectedDate = (selectedDate: Date) =>{
    console.log("CLICKED DATE",selectedDate)
  }

 return (
  <div className="w-full h-full">
    <h1 className="text-5xl text-center py-2 text-pink-600">Calendar-ts</h1>
    <Calendar getCurrDate={getSelectedDate} />
  </div>
 )
}
