import {useMemo, useState} from "react";

export const useSortedPost = (posts, sort) => {
    return useMemo(() => {
        console.log("Function got")
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
            return posts
        }
    }, [posts, sort]);
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPost(posts, sort)

    return useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])
}