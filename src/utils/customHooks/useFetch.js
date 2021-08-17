import {useQuery} from "./useQuery";

export const useGetPosts = (count = 1, page = 0, onRender= false) => {
    const url = 'https://nodejs-test-api-blog.herokuapp.com/api/v1/posts';

    let customUrl = `${url}?limit=${count}&skip=${page*count}`;

    const {data, load, err, getData} = useQuery(customUrl, onRender)
    return {data, load, err, getData};
};