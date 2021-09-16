import {Link, NavLink, Route} from 'react-router-dom';
import Contacts from './components/Contacts';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
        <ul className = "App-nav">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
        </ul>
        <hr/>
        <Route exact path ="/" component = {Home}/>
        <Route path ="/about" component = {About} />
        <Route path = "/contacts" component = {Contacts} />
    </div>
  );
}

export default App;
