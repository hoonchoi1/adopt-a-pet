import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import List from './Components/List';
import New from './Components/New';
import Details from './Components/Details';
import Edit from './Components/Edit';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <Route exact path="/" component={List} />
      <Route path="/new" component={New} />
      <Route path="/pet/:_id" component={Details} />
      <Route path="/edit/:_id" component={Edit} />
    </BrowserRouter>
  );
  }
}

export default App;
