import styled from "styled-components";
import { StyledButton } from "../Button/styled"

export const StyledBlueButton = styled(StyledButton)`
  padding-left: 1px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.oceanBlue};
  background-color: ${(props) => props.theme.colors.blue};
  box-shadow: 15px 10px 0px 0px ${(props) => props.theme.colors.darkGray};
  &:first-letter {
    color: ${(props) => props.theme.colors.yellow};
  }
  :hover {
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.black};
    box-shadow: 8px 3px 0px 0px ${(props) => props.theme.colors.darkGray};
  }
`;
