import { useParams, Link, useNavigate } from "react-router-dom";

export default function PostDetailPage({ posts, deletePost }) {
    const {postId} = useParams();
    const post = posts.find(p => p._id === postId)
    const navigate = useNavigate();

    function handleDelete() {
        deletePost(post._id);
        navigate("/");
    }


    return (
        <div class="box">
         <h2 class="subtitle">
           { post.text } 
         </h2>
         <button class="button is-danger" onClick={handleDelete}>Delete Post</button>
           <div>
             Made at: {new Date(post.createdAt).toLocaleString()} 
           </div>
        </div>
       )
}