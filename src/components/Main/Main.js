import { StyledMain, StyledWrap, StyledTitleContainer } from "./styled";

export const Main = ({ children }, { title = "Title" }) => {
  return (
    <StyledWrap>
      <StyledTitleContainer>{title}</StyledTitleContainer>
      <StyledMain>{children}</StyledMain>
    </StyledWrap>
  );
};
