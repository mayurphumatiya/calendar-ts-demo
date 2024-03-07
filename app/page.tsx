'use client'
import Calendar from "./components/calendar";

export default function Home() {

  const getdate = (selectedDate: Date) =>{
    console.log("CLICKED DATE",selectedDate)
  }

 return (
  <>
  <Calendar getCurrDate={getdate} />
  </>
 )
}
