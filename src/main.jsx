import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";
const CLERK_PUBLISHABLE_KEY="pk_test_bWF0dXJlLXNocmV3LTg3LmNsZXJrLmFjY291bnRzLmRldiQ"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
    <SignedIn>
    <UserButton />
    <App />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
        <h1>Sign in to continue</h1>
      </SignedOut>
    </ClerkProvider>
  </React.StrictMode>,
)
