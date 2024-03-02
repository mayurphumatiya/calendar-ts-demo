import dayjs from "dayjs";

interface DateObject {
  currentMonth: boolean;
  date: dayjs.Dayjs;
  today: boolean;
}

export const generateDate = (
  month: number = dayjs().month(),
  year: number = dayjs().year()
): DateObject[] => {
  const today = dayjs(); // Get today's date

  const firstDateOfMonth: dayjs.Dayjs = dayjs()
    .year(year)
    .month(month)
    .startOf("month");
  const lastDateOfMonth: dayjs.Dayjs = dayjs()
    .year(year)
    .month(month)
    .endOf("month");

  const arrayOfDate: DateObject[] = [];

  // create prefix date
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push({ currentMonth: false, date: firstDateOfMonth.day(i), today: false });
  }

  // generate current date
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    const currentDate = firstDateOfMonth.date(i);
    arrayOfDate.push({ currentMonth: true, date: currentDate, today: currentDate.isSame(today, 'date') });
  }

  // generate suffix date
  const remaining: number = 42 - arrayOfDate.length;
  for (let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remaining; i++) {
    arrayOfDate.push({ currentMonth: false, date: firstDateOfMonth.date(i), today: false });
  }

  return arrayOfDate;
};