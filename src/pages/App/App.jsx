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
import * as moviesAPI from "../../utilities/movies-api";
import MovieListPage from '../MovieListPage/MovieListPage';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [library, setLibrary] = useState([]);

  useEffect(function() {
      async function getLibrary() {
        const allMovies = await moviesAPI.getLibrary();
        setLibrary(allMovies)
      }
      getLibrary();
    }, [])

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
    const searchResults = await moviesAPI.search(searchTerm);
    setMovies(searchResults);
  };


  return (
    <main className="App">
      { user ?
          <>
            <h1 class="title">Welcome to WatchParty, {user.name}!</h1>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route 
                path="/search-movies" 
                element={<SearchPage 
                  movies={movies} 
                  setMovies={setMovies} 
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  getMovies={getMovies}
                />} 
              />
              <Route path="/library/:movieId" element={<MovieDetailPage movies={movies} setMovies={setMovies} user={user} library={library}/>} />
              <Route path="/new" element={<NewPostPage posts={posts} setPosts={setPosts}/>} />
              <Route path="/" element={<PostsFeed posts={posts} setPosts={setPosts}/>} />
              <Route path="/posts/:postId" element={<PostDetailPage posts={posts} deletePost={deletePost}/>} />
              <Route path="/library" element={<MovieListPage library={library} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
