import css from "./Time.module.css";
import cssPosition from "../../../style/position.module.css";
import cssDisplay from "../../../style/display.module.css";
import { HiOutlineClock } from "react-icons/hi";
import moment from "moment";
import Clock from "../Clock";

const { timeWrapper, timeText, timeInfo, time } = css;
const { positionTopCenter } = cssPosition;
const { displayFlexColumnCenter, displayFlexRowCenter } = cssDisplay;
const date = moment().format("ll");

function Time() {
  return (
    <div
      className={`${timeWrapper} ${positionTopCenter} ${displayFlexColumnCenter}`}
    >
      <div className={timeText}>
        <span>Today</span>
      </div>
      <div className={`${timeInfo} ${displayFlexRowCenter}`}>
        <span>{date}</span>
        <div className={`${time} ${displayFlexRowCenter}`}>
          <HiOutlineClock color="green" size={18} />
          <Clock></Clock>
        </div>
      </div>
    </div>
  );
}

export default Time;
