import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main class="box mx-4">
      <h1 class="title">WatchParty</h1>
      <button class="button is-link is-light my-4" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Existing Users Log In Here' : 'New Users Sign Up Here'}</button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
    </main>
  );
}