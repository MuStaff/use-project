import React from 'react';
import {StyledUsers} from "./styled";

const Users = ({children}) => {
    return (
        <StyledUsers>
            {children}
        </StyledUsers>
    );
};

export default Users;
