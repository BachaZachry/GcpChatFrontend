import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginPage } from './pages/LoginPage';
import { HomePage} from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
