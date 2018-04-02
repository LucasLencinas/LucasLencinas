import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Talks from './components/Talks';
import Skills from './components/Skills';

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <div className="content">
        <Route
          exact path="/"
          component={Home}
        />
        <Route
          path="/about"
          component={About}
        />
        <Route
          path="/skills"
          component={Skills}
        />
        <Route
          path="/projects"
          component={Projects}
        />
        <Route
          path="/articles"
          component={Articles}
        />
        <Route
          path="/talks"
          component={Talks}
        />
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;

// Color azul ==>  rgba(26, 150, 255, 0.75)
// Background => rgba(30, 30, 30, 1)

// rgba(200, 200, 200, 1)

// onhover
// color rgba(60, 60, 60, 1)
// background rgba(145, 175, 215, 1)

/*
    black:        rgb(0,     0,   0, 1),
    darkGray:     rgb(100, 100, 100, 1),
    lightGray:    rgb(200, 200, 200, 1),
    white:        rgb(255, 255, 255, 1),

    red:          rgb(204,   0,   0, 1),
    lightRed:     rgb(255,  51,   0, 1),

    green:        rgb(0,   204,   0, 1),
    lightGreen:   rgb(51,  204,  51, 1),

    yellow:       rgb(204, 102,   0, 1),
    lightYellow:  rgb(255, 153,  51, 1),

    blue:         rgb(0,     0, 255, 1),
    lightBlue:    rgb(26,  140, 255, 1),

    magenta:      rgb(204,   0, 204, 1),
    lightMagenta: rgb(255,   0, 255, 1),

    cyan:         rgb(0,   153, 255, 1),
    lightCyan:    rgb(0,   204, 255, 1),
}

*/
