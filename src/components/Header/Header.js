import { StyledHeader } from "./styled";
import { Button } from "../Button/Button";
import { Navigate } from "../Navigate/Navigate";
import { StyledText } from "../Text/styled";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "../../utils/routing/PublicRoute";
import PrivateRoute from "../../utils/routing/PrivateRoute";

// Components
import { Posts } from "../../pages/Posts/Posts";
import { useSelector } from "react-redux";
import { login } from "../../utils/routing";
import Users from "../../pages/Users/Users";

export const Header = () => {
  const isAuth = useSelector(({ auth }) => auth.isAuth);

  return (
    <StyledHeader>
      <StyledText>Work console straight from the past</StyledText>
      <Navigate>
        <BrowserRouter>
          <Button href="/posts">Posts</Button>
          <Button href="/users">Users</Button>

          {isAuth ? (
            <>
              <Button href="/log-in">Log In</Button>
              <Button href="/sign-up">Sign Up</Button>
            </>
          ) : (
            <>
              <Button href="/log-out">Log Out</Button>
              <Button href="/profile">Profile</Button>
            </>
          )}

          <Switch>
            <PublicRoute
              restricted={false}
              component={Posts}
              path="/posts"
              exact
            />
            <PublicRoute
              restricted={false}
              component={Users}
              path="/users"
              exact
            />
            {/*<PrivateRoute component={SignUp} path="/sign-up" exact />*/}
            {/*<PrivateRoute component={LogIn} path="/log-in" exact />*/}
            {/*<PrivateRoute component={LogOut} path="/log-out" exact />*/}
          </Switch>
        </BrowserRouter>
      </Navigate>
    </StyledHeader>
  );
};
