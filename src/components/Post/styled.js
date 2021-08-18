import styled from "styled-components";
import { StyledMain } from "../Main/styled";

export const StyledPost = styled(StyledMain)`
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
