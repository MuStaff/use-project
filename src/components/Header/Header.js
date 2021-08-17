import {StyledHeader} from './styled';
import {Button} from "../Button/Button";
import {Navigate} from "../Navigate/Navigate";
import {StyledText} from "../Text/styled";

export const Header = () => {
    return (
        <StyledHeader>
            <StyledText>Work console straight from the past</StyledText>
            <Navigate>
                <Button href='/#'>Posts</Button>
                <Button href='/#'>Users</Button>
                <Button href='/#'>Log In</Button>
                <Button href='/#'>Sign Up</Button>
            </Navigate>
        </StyledHeader>
    )
}