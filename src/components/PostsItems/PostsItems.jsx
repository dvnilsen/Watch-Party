import { Link, useNavigate } from "react-router-dom";
import * as postsAPI from '../../utilities/posts-api'

export default function PostsItems({ post, index }) {

  const navigate = useNavigate(); 

    return (
     <div class="box mx-6">
      <h2 class="subtitle">
        { post.text } 
      </h2>
      <button class="button is-link" onClick={() => navigate(`/posts/${post._id}`)}>View Post</button>
        <div>
          Posted: {new Date(post.createdAt).toLocaleString()} 
        </div>
     </div>
    )
    }