import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewPostPage from '../NewPostPage/NewPostPage';
import NavBar from '../../components/NavBar/NavBar';
import SearchPage from "../SearchPage/SearchPage"; 
import PostsFeed from '../../components/PostsFeed/PostsFeed';
import * as postsAPI from '../../utilities/posts-api'
import PostDetailPage from "../../pages/PostDetailPage/PostDetailPage";


export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);

  useEffect(function() {
    async function getPosts() {
      const allPosts = await postsAPI.getAllPosts();
      setPosts(allPosts)
    }
    getPosts();
  }, [])

  async function deletePost(id) {
    console.log("anything")
    const deletedPost = await postsAPI.deletePost(id)
    const updatedPosts = [...posts] 
    setPosts(updatedPosts.filter(post => post._id !== deletedPost._id));
    
    }



  return (
    <main className="App">
      <h1 class="title">Welcome to WatchParty!</h1>
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/search" element={<SearchPage />} />
              <Route path="/new" element={<NewPostPage />} />
              <Route path="/" element={<PostsFeed posts={posts} setPosts={setPosts}/>} />
              <Route path="/:postId" element={<PostDetailPage posts={posts} deletePost={deletePost}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
