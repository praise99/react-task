import logo from './logo.svg';
import './App.css';
import {OnBoarding} from "./Pages/OnBoarding"
import {Business} from "./Pages/Business"
import {Social} from "./Pages/SocialMedia"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
          <Route path="/" exact  component={OnBoarding} />
            <Route path="/socials" component={Social} />
            <Route path="/business" component={Business} />
          </Switch>
      </div>
    </Router>

  );
}

export default App;
