import {useCallback, useEffect, useState} from "react";
import {getByTestId} from "@testing-library/react";
// https://nodejs-test-api-blog.herokuapp.com/api/v1

export const useQuery = (url, onRender = false) => {
    const [result, setResult] = useState({
        data: [],
        load: false,
        err: ""
    })

    const getData =  useCallback(async (url) => {
        setResult(prev => {return {...prev, load: true}})
        try {
            const response = await fetch(url);
            const posts = await response?.json();
            setResult(prev => {return {...prev, data: posts, load: false}})
        } catch (error) {
            setResult(prev => {return {...prev, load: false, err: error}})
        }
    }, [])

    useEffect(() => {
        if(onRender) {getData(url)}
    }, [url, getData, onRender]);

    return {...result, getData};
};