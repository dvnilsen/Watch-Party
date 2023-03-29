import { useState, useEffect } from 'react';
import PostsItems from "../PostsItems/PostsItems";
import * as postsAPI from '../../utilities/posts-api'

export default function PostsFeed({ post }) {
    const [posts, setPosts] = useState([]);

    useEffect(function() {
      async function getPosts() {
        const allPosts = await postsAPI.getAllPosts();
        setPosts(allPosts)
      }
      getPosts();
    }, [])
  
    async function addPost(post) {
      const newPost = await postsAPI.createPost(post)
      setPosts([...posts, newPost])
    }
  
    const postList = posts.map((post, idx) => (
      <PostsItems post={post} key={idx} />
    ));

    return (
        <>
        <h2 class="title">Post Feed</h2>
        {postList}
        </>
    )
}