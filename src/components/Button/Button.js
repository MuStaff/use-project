import { StyledButton } from "./styled";

export const Button = ({ children, ...props }) => {
  //dfgoj
  return <StyledButton {...props}>{children}</StyledButton>;
};
