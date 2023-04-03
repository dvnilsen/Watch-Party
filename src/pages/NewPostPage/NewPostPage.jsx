
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import * as postsAPI from "../../utilities/posts-api";


export default function NewPostPage({ posts, setPosts, library }) {
    const [newPost, setNewPost] = useState({text:"", movie:""})
    const [selectedOption, setSelectedOption] = useState(""); 
    const navigate = useNavigate();

    async function addPost(post) {
      const newPost = await postsAPI.createPost(post)
      setPosts([...posts, newPost])
      }
    
    function handleSubmit(evt) {
        evt.preventDefault();
        addPost(newPost);
        setNewPost({text:"", movie:""})
        navigate("/");
    }

    function handleChange(evt) {
        setNewPost({...newPost, [evt.target.name]: evt.target.value})
    }

    const handleSelect = (evt) => {
      setSelectedOption(evt.target.value); 
      setNewPost({...newPost, [evt.target.name]: evt.target.value})
      
    };

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
            <h1 class="subtitle">Select A Movie From Your Movies</h1>
            <select class="select my-2" name="movie" value={selectedOption} onChange={handleSelect}>
              <option value="">Select A Movie</option>
              {library.map((option) => (
                <option key={option.Title} value={option.imdbID}>
                  {option.Title}
              </option>
              ))}
            </select>
            <div>
              <button class="button is-primary my-4 mx-3" type="submit">Add New Post</button>
              <button class="button is-link my-4 mx-3" onClick={() => navigate("/")}>Return To Post Feed</button>
            </div> 
          </form>
        </>
    )
}