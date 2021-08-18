import { StyledMain, StyledWrap, StyledTitleContainer } from "./styled";

export const Main = ({ children }, { title = "Title", ...props }) => {
  return (
    <StyledWrap>
      <StyledTitleContainer>{title}</StyledTitleContainer>
      <StyledMain>{children}</StyledMain>
    </StyledWrap>
  );
};
