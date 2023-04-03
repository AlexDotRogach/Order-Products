import { getMonth } from "./dateServices";
import { getDateInfo } from "./dateServices";

export const getDayMonth = (date) => {
  const { month, day } = getDateInfo(new Date(date));
  const monthStr = `${+month + 1}`.padStart(2, "0");

  return `${day} / ${monthStr}`;
};

export const getDayMonthStringYear = (date) => {
  const dateFormat = new Date(date);

  const { month, day, year } = getDateInfo(dateFormat);

  return `${day} / ${getMonth(+month, "short")} / ${year}`;
};
