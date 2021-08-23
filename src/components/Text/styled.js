import styled from "styled-components";

export const StyledText = styled.p`
  color: ${(props) => props.theme.colors[props.color]};
  font-size: ${(props) => props.theme.fontSizes[props.size]};
`;
