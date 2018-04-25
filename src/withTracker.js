import React, { Component } from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-96220362-1', {
  debug: false
});

export default function withTracker(WrappedComponent) {
  const trackPage = (page) => {
    ReactGA.pageview(page);
  };

  const HOC = class extends Component {
    componentDidMount() {
      // eslint-disable-next-line
      const page = this.props.location.pathname;
      trackPage(page);
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
}
