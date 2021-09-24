import logo from './logo.svg';
import './App.css';
import Components from './Components/Components';
import { BrowserRouter as Router, Link, Switch,Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import NoMatch from './Components/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Components></Components>
        </Route>
        <Route exact path="/home">
          <Components></Components>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/blog">
          <Blog></Blog>
        </Route>
        <Route path='/*'>
          <NoMatch></NoMatch>
        </Route>
     </Switch>
    </Router>
  );
}

export default App;
