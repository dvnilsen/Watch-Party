
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import * as postsAPI from "../../utilities/posts-api";


export default function NewPostPage({ posts, setPosts }) {
    const [newPost, setNewPost] = useState({text:""})
    const navigate = useNavigate();

    async function addPost(post) {
      const newPost = await postsAPI.createPost(post)
      setPosts([...posts, newPost])
      }
    
    function handleSubmit(evt) {
        evt.preventDefault();
        addPost(newPost);
        setNewPost({text:""})
        navigate("/");
    }

    function handleChange(evt) {
        setNewPost({...newPost, [evt.target.name]: evt.target.value})
    }

    return (
        <>
        <h1 class="title">Write A New Post</h1>
          <form class="box mx-6" onSubmit={handleSubmit}>
            <div class="field">
              <textarea 
                  class="textarea"
                  rows="5"
                  cols="8"
                  type="text"
                  name="text"
                  value={newPost.text}
                  placeholder="Write a Post"
                  onChange={handleChange} />
            </div>
            <div class="field">
              <button class="button is-primary" type="submit">Add Post</button>
            </div> 
          </form>
        </>
    )
}