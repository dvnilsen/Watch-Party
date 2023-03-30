
import { useState } from "react"
import PostsFeed from "../../components/PostsFeed/PostsFeed";


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
            <div class="field">
              <label class="label">Write A New Post</label>
              <textarea 
                  class="input"
                  rows="8"
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