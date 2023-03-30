import { useState, useEffect } from 'react';
import PostsItems from "../PostsItems/PostsItems";
import * as postsAPI from '../../utilities/posts-api'
import NewPostPage from '../../pages/NewPostPage/NewPostPage';


export default function PostsFeed ( { posts, setPosts } ) {

    async function addPost(post) {
        const newPost = await postsAPI.createPost(post)
        setPosts([...posts, newPost])
        }
  
    const postList = posts.map((post, index) => (
      <PostsItems post={post} index={index} />
    ));

    return (
        <>
        <h2 class="title">Create A New Post</h2>
        <NewPostPage addPost={addPost}/>
        <h2 class="title">Post Feed</h2>
        {postList}
        </>
    )
}