import React, { useState, useEffect } from "react";
import "./App.css";
import { OnBoarding } from "./Pages/OnBoarding";
import { Business } from "./Pages/Business";
import { Social } from "./Pages/SocialMedia";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <Router>
      <div className="App">
        {loading ? (
          <div class="spinner">
            <div class="loader">
              <svg viewBox="0 0 80 80">
                <circle id="test" cx="40" cy="40" r="32"></circle>
              </svg>
            </div>
            <div class="loader triangle">
              <svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72"></polygon>
              </svg>
            </div>
            <div class="loader">
              <svg viewBox="0 0 80 80">
                <rect x="8" y="8" width="64" height="64"></rect>
              </svg>
            </div>
            <a
              class="dribbble"
              href="https://dribbble.com/shots/5878367-Loaders"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
                alt=""
              />
            </a>
          </div>
        ) : (
          <Switch>
            <Route path="/" exact component={OnBoarding} />
            <Route path="/socials" component={Social} />
            <Route path="/business" component={Business} />
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
