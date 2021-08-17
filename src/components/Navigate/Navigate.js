import { StyledNavigate } from "./styled";
import { DateTime } from "luxon";
import { useState } from "react";

export const Navigate = ({ children }) => {
  const [time, setTime] = useState(0);
  setTimeout(() => {
    setTime(DateTime.local().toFormat("dd EEEE ZZZZ"));
  }, 1000);
  // const RealTime = DateTime.local().toFormat('dd EEEE ZZ');
  // console.log(RealTime)

  return (
    <StyledNavigate>
      {children}
      {time}
    </StyledNavigate>
  );
};
