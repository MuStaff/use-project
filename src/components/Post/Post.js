import { StyledPost } from "./styled";

export const Post = ({ data }) => {
  const {
    _id: id,
    title,
    description,
    fullText,
    postedBy,
    likes,
    image,
    dateCreated,
  } = data;
  
  const mainURL = "https://nodejs-test-api-blog.herokuapp.com/api/v1/";

  return (
    <StyledPost>
      {"{"}
      {id && <p>&emsp;_id: {id};</p>}
      {postedBy && <p>&emsp;postedBy: {postedBy};</p>}
      {title && <p>&emsp;title: {title};</p>}
      {description && <p>&emsp;description: {description};</p>}
      {likes && <p>&emsp;_likes.count: {likes.length};</p>}
      {image && <p>&emsp;image: {mainURL + image};</p>}
      {"}"}
    </StyledPost>
  );
};
