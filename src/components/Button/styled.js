import styled from "styled-components";

export const StyledButton = styled.a`
  display: inline-block;
  height: 1.5rem;
  color: ${props => props.theme.colors.black};
  background-color: transparent;
  //transition: 0.2s linear;
  &:first-letter {
    color: ${props => props.theme.colors.blue};
  }
  :hover {
    color: ${props => props.theme.colors.blue};
  }
`

export const StyledBlueButton = styled(StyledButton)`
  padding-left: 1px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.oceanBlue};
  background-color: ${props => props.theme.colors.blue};
  box-shadow: 15px 10px 0px 0px ${props => props.theme.colors.darkGray};
  &:first-letter {
    color: ${props => props.theme.colors.yellow};
  }
  :hover {
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.black};
  }
`