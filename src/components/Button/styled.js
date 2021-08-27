import styled from "styled-components";

export const StyledButton = styled.a`
  display: inline-block;
  height: 1.5rem;
  color: ${(props) => props.theme.colors.black};
  background-color: transparent;
  &:first-letter {
    color: ${(props) => props.theme.colors.blue};
  }
  :hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;