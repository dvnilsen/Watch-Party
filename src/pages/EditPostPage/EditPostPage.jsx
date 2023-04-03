import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as postsAPI from "../../utilities/posts-api"; 

export default function EditPostPage({ posts, setPosts, library }) {
    const {postId} = useParams();
    const post = posts.find(p => p._id === postId)
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(post && post.movie);
    const [updatedPost, setUpdatedPost] = useState({text: post ? post.text : "", movie: post ? post.movie : "", _id: postId});


    async function handleSubmit(evt) {
        evt.preventDefault();
        const updated = await postsAPI.updatePost(postId, updatedPost);
        const updatedPostList = posts.map(p => p._id === updated._id ? updated : p)
        setPosts(updatedPostList); 
        navigate(`/posts/${postId}`);
    }

    function handleChange(evt) {
        setUpdatedPost({...updatedPost, [evt.target.name]: evt.target.value})
    }

    const handleSelect = (evt) => {
        setSelectedOption(evt.target.value); 
        setUpdatedPost({...updatedPost, [evt.target.name]: evt.target.value})
    }

    return (
        <>
        <h1 class="title my-4">Edit Post</h1>
          <form class="box mx-6" onSubmit={handleSubmit}>
            <div class="field">
              <textarea 
                  class="textarea"
                  rows="5"
                  cols="8"
                  type="text"
                  name="text"
                  value={updatedPost.text}
                  placeholder="Write a Post"
                  onChange={handleChange}>
               {updatedPost.text}</textarea>
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
              <button class="button is-primary my-4 mx-3" type="submit">Edit Post</button>
              <button class="button is-danger my-4 mx-3" onClick={() => navigate(`/posts/${postId}`)}>Cancel</button>
            </div> 
          </form>
        </>
    )

}