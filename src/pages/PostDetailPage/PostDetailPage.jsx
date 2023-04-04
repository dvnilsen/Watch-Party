import { useParams, Link, useNavigate } from "react-router-dom";

export default function PostDetailPage({ posts, deletePost }) {
    const {postId} = useParams();
    const post = posts.find(p => p._id === postId)
    const navigate = useNavigate();

    function handleDelete() {
        deletePost(post._id);
        navigate("/");
    }

    console.log(post); 
    return (
      <>
        <div class="box">
         <h2 class="subtitle">
           { post.text } 
         </h2>
         Related Movie: <Link to={`/library/${post.movie.imdbID}`}>{post.movie.Title}</Link>
         <hr></hr>
          <Link
            to={`/edit/${post._id}`}
            class="button is-primary mx-2"
          >
            Edit Post
          </Link>
         <button class="button is-danger mx-2" onClick={handleDelete}>Delete Post</button>
         <button class="button is-link mx-2" onClick={() => navigate("/")}>Return To Feed</button>
         <hr></hr>
           <div>
             Posted: {new Date(post.createdAt).toLocaleString()} 
           </div>
        </div>
      </>
       )
}