
export default function PostsFeed({ post }) {
    return (
     <div class="box">
      <h2>
        { post.text } 
      </h2>
        <div>
          Made at: {new Date(post.createdAt).toLocaleString()} 
        </div>
     </div>
    )
    
    }