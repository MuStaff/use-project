import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  height: 3rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.colors.gray};
`;
