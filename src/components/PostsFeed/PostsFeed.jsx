
export default function PostsFeed({ post }) {
    return (
     <div>
      <h3>
        { post.text } 
      </h3>
        <div>
          Made at: {new Date(post.createdAt).toLocaleString()} 
        </div>
     </div>
    )
    
    }