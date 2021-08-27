import styled from "styled-components";

export const WindowContent = styled.div`
  border-right: thick double ${(props) => props.theme.colors.black};
  border-bottom: thick double ${(props) => props.theme.colors.black};
  border-left: 2px solid ${(props) => props.theme.colors.black};
  border-top: 2px solid ${(props) => props.theme.colors.black};
  padding: 20px;
`;

export const WindowWrap = styled.div`
position: relative;
  max-width: 70%;
  width: 70%;
  margin: 50px auto;
  background-color: ${(props) => props.theme.colors.gray};
  padding: 10px;
  box-shadow: 30px 20px 0px 0px ${(props) => props.theme.colors.black};
`;

export const WindowTitle = styled.div`
  width: 70px;
  text-align: center;
  position: absolute;
  background: ${(props) => props.theme.colors.gray};
  left: calc(100% / 2 - 70px);
  margin-top: -10px;
  padding: 0 10px;
`;
