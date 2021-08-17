import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginPage } from './pages/LoginPage';
import { HomePage} from './pages/HomePage';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
