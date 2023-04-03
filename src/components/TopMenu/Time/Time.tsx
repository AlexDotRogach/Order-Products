import css from "./Time.module.css";
import cssPosition from "../../../style/position.module.css";
import cssDisplay from "../../../style/display.module.css";
import { HiOutlineClock } from "react-icons/hi";
import Clock from "../Clock";
import { getDateInfo, getMonth } from "../../../tools/date/dateServices";

const { timeWrapper, timeText, timeInfo, time } = css;
const { positionTopCenter } = cssPosition;
const { displayFlexColumnCenter, displayFlexRowCenter } = cssDisplay;

const { day, month, year } = getDateInfo(new Date());
const dateTemplate = `${day} ${getMonth(+month, "short")}, ${year}`;

function Time() {
  return (
    <div
      className={`${timeWrapper} ${positionTopCenter} ${displayFlexColumnCenter}`}
    >
      <div className={timeText}>
        <span>Today</span>
      </div>
      <div className={`${timeInfo} ${displayFlexRowCenter}`}>
        <span>{dateTemplate}</span>
        <div className={`${time} ${displayFlexRowCenter}`}>
          <HiOutlineClock color="green" size={18} />
          <Clock></Clock>
        </div>
      </div>
    </div>
  );
}

export default Time;
