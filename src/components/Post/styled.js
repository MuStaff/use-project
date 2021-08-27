import styled from "styled-components";

export const StyledPost = styled.div`
  border-right: thick double ${(props) => props.theme.colors.black};
  border-bottom: thick double ${(props) => props.theme.colors.black};
  border-left: 2px solid ${(props) => props.theme.colors.black};
  border-top: 2px solid ${(props) => props.theme.colors.black};
  padding: 10px;
  margin-bottom: 4px;

  & p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover {
    border-left: thick double ${(props) => props.theme.colors.black};
    border-top: thick double ${(props) => props.theme.colors.black};
    border-right: 2px solid ${(props) => props.theme.colors.black};
    border-bottom: 2px solid ${(props) => props.theme.colors.black};
  }
`;
