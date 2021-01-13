import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetails from './PostDetails/PostDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post-details:postId">
          <PostDetails />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
