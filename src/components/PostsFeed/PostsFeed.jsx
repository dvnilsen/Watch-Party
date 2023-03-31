
import PostsItems from "../PostsItems/PostsItems";

export default function PostsFeed ( { posts } ) {

  
    const postList = posts.map((post, index) => (
      <PostsItems post={post} index={index} />
    ));

    return (
        <>
        <h2 class="title">Post Feed</h2>
        {postList}
        </>
    )
}