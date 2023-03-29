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


export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);

  async function addPost(post) {
    const newPost = await postsAPI.createPost(post)
    setPosts([...posts, newPost])
    }

  return (
    <main className="App">
      <h1>Welcome to WatchParty!</h1>
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/search" element={<SearchPage />} />
              <Route path="/new" element={<NewPostPage addPost = {addPost}/>} />
              <Route path="/" element={<PostsFeed posts = {posts} setPosts = {setPosts} />} /> 
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
