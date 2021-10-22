import { Button } from "react-bootstrap";
import {useHistory } from "react-router-dom";
import React from 'react';

function Start() {
    const history = useHistory();
  function handleSignup() {
    history.push("/signup");
  }

  return (
    <div>
      <h1 className="text-center mb-4">Welcome to ChatApp</h1>
      <Button type="submit" className="w-100 mt-3" onClick={handleSignup}>
        Sign Up
      </Button>
    </div>
  );
}

export default Start;
