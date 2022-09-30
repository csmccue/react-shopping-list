import './App.css';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/todo" component={Todo} />
        <Route exact path="/"></Route>
      </Switch>
    </div>
  );
}
export default App;
