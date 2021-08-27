import { StyledBlueButton } from "./styled";

export const ButtonBlue = ({ children, ...props }) => {
  return <StyledBlueButton {...props}>{children}</StyledBlueButton>;
};
