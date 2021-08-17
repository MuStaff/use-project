import {StyledMain, StyledWrap, StyledTitleContainer} from "./styled";

export const Main = ({children}) => {
    return (
        <StyledWrap>
            <StyledTitleContainer>Title</StyledTitleContainer>
            <StyledMain>
                {children}
            </StyledMain>
        </StyledWrap>
    )
}