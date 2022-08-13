import React from "react"
import { useAuth } from "../../context/authProvider/useAuth"
import { useHistory } from "react-router-dom";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {

  const auth = useAuth()
  let history = useHistory();

  function handleClick() {
    history.push("/login");
    window.location.reload();
  }

  if (!auth.email) {
    return (
      <div className="App--protected">
        <h2>You don't have access.</h2>
        <button onClick={handleClick}>Back to Login</button>
      </div>
    )
  };

  return children;
}