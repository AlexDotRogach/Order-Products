import { useEffect, useState } from "react";
import { getTimeByUTC } from "../../../tools/date/dateServices";

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);
  const updateTime = () => {
    const { hours, minutes } = getTimeByUTC();

    const newTime = `${`${hours}`.padStart(2, "0")}:${`${minutes}`.padStart(
      2,
      "0"
    )}`;

    setTime(newTime);
  };

  return <time>{time}</time>;
}

export default Clock;
