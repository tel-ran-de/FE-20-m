import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Loader from './components/Loader';
import {useSelector} from 'react-redux';
import {appSelector} from './todo_store/appReducer/AppReducer'
import Auth from './components/Auth';



function App() {
  const isLoading = useSelector(appSelector).isLoading
  return (
    <div className="App">
      <Auth />
      <Header />
      <hr />
      <TodoList />
      {isLoading && <Loader />}
    </div>
  );
}


export default App;
