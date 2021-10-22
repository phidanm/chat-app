import React from "react";
import '../App.css'
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import Start from "./Start";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    
    <Container
      className="d-flex align-items-center justify-content-center "
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 " style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
            <Route  path="/dashboard" component = {Dashboard}/>
            <Route  exact path="/" component = {Start}/>
            <Route path="/login" component = {Login}/>
            <Route  path="/signup" component = {Signup}/></Switch>
            </AuthProvider>
        </Router>
      </div>
    </Container>
    
  );
}

export default App;
