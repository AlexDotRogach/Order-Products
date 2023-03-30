import moment from "moment";
import { useState } from "react";
function Clock() {
  const [time, setTime] = useState("");
  const timeUpdate: () => void = () => setTime(moment().format("LT"));

  setInterval(timeUpdate, 1000);

  return <time>{time}</time>;
}

export default Clock;
