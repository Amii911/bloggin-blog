import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import Blog from './Components/Blog';
import BlogDetails from './Components/BlogDetails';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return(
    <Router>
  <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;