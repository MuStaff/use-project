import {StyledPost} from "./styled";
import {StyledMain} from "../Main/styled";

export const Post = ({children}) => {
    return (
        <StyledPost>
            <StyledMain>
                {JSON.stringify(children)}
            </StyledMain>
        </StyledPost>
    )
}