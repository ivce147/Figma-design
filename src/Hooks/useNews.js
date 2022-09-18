import { useEffect, useState } from "react";
import { getPosts } from "../api/posts.api";

export const useNews =() => {
    const [news, setNews] = useState([]);
    const [newsLoading, setNewsLoading] = useState(true);

    useEffect(() => {
        async function loadNews () {}
            getPosts()
            .then((result) => {
                setNews(result.data.posts);
                setNewsLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setNewsLoading(false)
            })
            loadNews();
    }, [])
    return {
        news,
        newsLoading,
    }
}