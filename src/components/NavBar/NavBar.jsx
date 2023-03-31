import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <nav class="navbar">
        <Link class ="navbar-item"  to="/">My Posts</Link>
        <Link class ="navbar-item" to="/movie-library">My Movies</Link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>
          <div class="navbar-dropdown">
            <Link class ="navbar-item" to="/new">Create New Post</Link>
            <Link class ="navbar-item" to="/search-movies">Search For Movies</Link>
            <Link class ="navbar-item" to="" onClick={handleLogOut}>Log Out</Link>
          </div>
        </div>
      </nav>
    </>
  );
}