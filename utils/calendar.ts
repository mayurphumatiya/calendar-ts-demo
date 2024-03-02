import dayjs from "dayjs";

export const generateDate = (
  month: number = dayjs().month(),
  year: number = dayjs().year()
): dayjs.Dayjs[] => {
  const firstDateOfMonth: dayjs.Dayjs = dayjs()
    .year(year)
    .month(month)
    .startOf("month");
  const lastDateOfMonth: dayjs.Dayjs = dayjs()
    .year(year)
    .month(month)
    .endOf("month");

  const arrayOfDate: dayjs.Dayjs[] = [];

  // create prefix date
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push(firstDateOfMonth.day(i));
  }

  // generate current date
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push(firstDateOfMonth.date(i));
  }

  const remaining: number = 42 - arrayOfDate.length;

  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push(firstDateOfMonth.date(i));
  }

  return arrayOfDate;
};