import { StyledUser } from "./styled";

export const User = ({ data }) => {
  const {
    _id: id,
    email,
    name,
    avatar,
    extra_details,
    skills,
    profession,
    details,
    dateCreated,
  } = data;
  
  const mainURL = "https://nodejs-test-api-blog.herokuapp.com/api/v1/";

  return (
    <StyledUser>
      {"{"}
      {id && <p>&emsp;_id: {id};</p>}
      {email && <p>&emsp;email: {email};</p>}
      {name && <p>&emsp;name: {name};</p>}
      {profession && <p>&emsp;profession: {profession};</p>}
      {extra_details && <p>&emsp;extra_details: {extra_details};</p>}
      {skills && <p>&emsp;skills: {skills};</p>}
      {details && <p>&emsp;details: {details};</p>}
      {"}"}
    </StyledUser>
  );
};
