import { Link } from "react-router-dom";
import * as postsAPI from '../../utilities/posts-api'

export default function PostsItems({ post, index }) {

    return (
     <div class="box">
      <h2 class="subtitle">
        { post.text } 
      </h2>
      <Link to={`/${post._id}`}>View Post</Link>
        <div>
          Made at: {new Date(post.createdAt).toLocaleString()} 
        </div>
     </div>
    )
    }