import './App.css';
import { Route, Switch } from 'react-router-dom';
// import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <Switch>
        {/* <Route path="/auth/:type" component={Auth} /> */}
        <Route path="/todo" component={Todo} />
        <Route exact path="/"></Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
