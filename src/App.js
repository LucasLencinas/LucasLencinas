import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Talks from './components/Talks';
import Skills from './components/Skills';

const meta = {
  title: 'Lucas Lencinas',
  description: 'Lucas Lencinas - Software Engineer. Javascript Enthusiast. React and Node.js developer',
  canonical: 'https://lucaslencinas.github.io',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'lucas,lencinas,react,node,javascript,java,scala,frontend,backend,fullstack,graphql,engineering'
    },
    property: {
      'og:title': 'Lucas Lencinas',
      'og:site_name': 'Lucas Lencinas',
      'og:type': 'website',
      'og:image': 'http://lucaslencinas.github.io/diploma.jpg',
      'og:image:secure_url': 'https://lucaslencinas.github.io/diploma.jpg',
      'og:url': 'https://lucaslencinas.github.io',
      'og:description': 'Lucas Lencinas - Software Engineer. Javascript Enthusiast. React and Node.js developer',
      'og:locale': 'en_US'
    }
  },
  auto: {
    ograph: true
  }
};

const App = () => (
  <Router>
    <DocumentMeta {...meta}>
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
    </DocumentMeta>
  </Router>
);

export default App;

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
