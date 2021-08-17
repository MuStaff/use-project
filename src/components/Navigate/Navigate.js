import { StyledNavigate } from "./styled";
import { DateTime } from "luxon";
import { useState } from "react";

export const Navigate = ({ children }) => {
  const [time, setTime] = useState(0);
  setTimeout(() => {
    setTime(DateTime.local().toFormat("( hh:mm:ss )"));
  }, 1000);

  return (
    <StyledNavigate>
      {children}
      {time}
    </StyledNavigate>
  );
};
