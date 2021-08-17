import {StyledHeader} from './styled';
import {Button} from "../Button/Button";
import {Navigate} from "../Navigate/Navigate";
import {StyledText} from "../Text/styled";

export const Header = () => {
    return (
        <StyledHeader>
            <StyledText>Work console straight from the past</StyledText>
            <Navigate>
                <Button href='/tea'>Posts</Button>
                <Button href='/tea'>Users</Button>
                <Button href='/tea'>Log In</Button>
                <Button href='/tea'>Sign Up</Button>
            </Navigate>
        </StyledHeader>
    )
}