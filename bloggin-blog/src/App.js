import Navbar from './Components/Navbar';
import Home from './Components/Home'

function App() {
  return(
  <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;