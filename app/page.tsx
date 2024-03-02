'use client'
import { generateDate } from "@/utils/calendar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Genrate", generateDate());
  }, []);
  return <div>HOME</div>;
}
