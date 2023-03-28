import { useState } from "react"

export default function NewPostPage({ addPost }) {

    const [newPost, setNewPost] = useState({text:""})
    
    function handleSubmit(evt) {
        evt.preventDefault();
        addPost(newPost);
        setNewPost({text:""})
    }

    function handleChange(evt) {
        setNewPost({...newPost, [evt.target.name]: evt.target.value})
    }


    return (
        <>
          <form onSubmit={handleSubmit}>
          <input 
              type="text"
              name="text"
              value={newPost.text}
              placeholder="Write a Post"
              onChange={handleChange} />
          <button type="submit">Add Post</button>
          </form>
        </>
    )
}