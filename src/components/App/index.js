import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import '../../App.css';
import Header from "../Header";
import Welcome from "../Welcome";
import Login from "../Login";
import Landing from "../Landing";
import SignUp from "../SignUp";
import ErrorPage from "../ErrorPage";
import Footer from "../Footer";
import ForgetPassword from "../ForgetPassword";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Landing } />
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgetpassword" component={ForgetPassword}/>
        <Route component={ErrorPage} />
      </Switch>    
      
      <Footer />
    </Router>
  );
}

export default App;
