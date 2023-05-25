import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Form from './Components/Form';
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
          <Route path="/form">
            <Form/>
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