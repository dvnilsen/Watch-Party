
export default function PostsItems({ post, index }) {
    return (
     <div class="box">
      <h2 class="subtitle">
        { post.text } 
      </h2>
      <button class="button is-primary">View Post</button>
        <div>
          Made at: {new Date(post.createdAt).toLocaleString()} 
        </div>
     </div>
    )
    }