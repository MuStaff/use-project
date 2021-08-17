import styled from "styled-components";

export const StyledMain = styled.div`
  border-right: thick double ${props => props.theme.colors.black};
  border-bottom: thick double ${props => props.theme.colors.black};
  border-left: 2px solid${props => props.theme.colors.black};
  border-top: 2px solid ${props => props.theme.colors.black};
  padding: 10px;
  
`

export const StyledWrap = styled.div`
  background-color: ${props => props.theme.colors.gray};
  padding: 10px;
  box-shadow: 30px 20px 0px 0px ${props => props.theme.colors.black};
`

export const StyledTitleContainer = styled.p`
  position: absolute;
  background: ${props => props.theme.colors.gray};
  left: calc(100% / 2 - 75px);
  margin-top: -9px;
  padding: 0 10px;
`