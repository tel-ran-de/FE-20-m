import { Route, Switch } from 'react-router-dom';
import './App.css';
import AuthComponent from './components/AuthComponent';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={ContactList} />
        <Route path='/contact/add' component={ContactForm} />
        <Route path='/login' component={AuthComponent} />
      </Switch>
    </div>
  );
}

export default App;
