import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <nav class="navbar" role="navigation">
        <div class="navbar-brand">
          <Link class="navbar-item title" to="/">
            <img src="https://i.imgur.com/bdEjnXL.png" width="32" height="28" />WatchParty
          </Link>
        </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-hidden-mobile">
              
            </a>
            <div class="navbar-dropdown">
              <Link class ="navbar-item" to="/new">Create New Post</Link>
              <Link class ="navbar-item" to="/library">My Movies</Link>
              <Link class ="navbar-item" to="/search-movies">Search For Movies</Link>
              <Link class ="navbar-item" to="" onClick={handleLogOut}>Log Out</Link>
            </div>
          </div>
          <a class="navbar-item navbar-end subtitle">Hello {user.name}!</a>
      </nav>
    </>
  );
}