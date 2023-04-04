import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
    <h1 class="navbar-start navbar-item title"><img src="https://i.imgur.com/bdEjnXL.png" width="32" height="28" />WatchParty</h1>
    <main class="box mx-4">
      <button class="button is-link is-light my-4" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Existing Users Log In Here' : 'New Users Sign Up Here'}</button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
    </main>
    </>
  );
}