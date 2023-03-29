import { useState, useEffect } from 'react';
import PostsItems from "../PostsItems/PostsItems";
import * as postsAPI from '../../utilities/posts-api'


export default function PostsFeed( { posts, setPosts } ) {
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(function() {
      async function getPosts() {
        const allPosts = await postsAPI.getAllPosts();
        setPosts(allPosts)
      }
      getPosts();
    }, [])
  
    const postList = posts.map((post, index) => (
      <PostsItems post={post} index={index} />
    ));

    return (
        <>
        <h2 class="title">Post Feed</h2>
        {postList}
        </>
    )
}