import {StyledPost} from "./styled";

export const Post = ({children}) => {
    const {_id: id, title, description, postedBy, likes, image} = children;
    const mainURL = 'https://nodejs-test-api-blog.herokuapp.com/api/v1'

    return (
        <StyledPost>
                {'{'}
                <p>&emsp;_id: {id};</p>
                <p>&emsp;postedBy: {postedBy};</p>
                <p>&emsp;title: {title};</p>
                <p>&emsp;descr: {description};</p>
                <p>&emsp;_likes.count: {likes.length};</p>
                <p>&emsp;image: {mainURL+image};</p>
                {'}'}
        </StyledPost>
    )
}