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
import MovieDetailPage from '../../pages/MovieDetailPage/MovieDetailPage';
import * as moviesApi from "../../utilities/movies-api";


export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  async function getMovies() {
    const searchResults = await moviesApi.search(searchTerm);
    setMovies(searchResults);
  };



  return (
    <main className="App">
      <h1 class="title">Welcome to WatchParty!</h1>
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route 
                path="/search" 
                element={<SearchPage 
                  movies={movies} 
                  setMovies={setMovies} 
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  getMovies={getMovies}
                />} 
              />
              <Route path="/:movieId" element={<MovieDetailPage movies={movies} setMovies={setMovies} user={user}/>} />
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
