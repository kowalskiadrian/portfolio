import React from 'react';
import  { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/containers/Home';
import './App.css';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
