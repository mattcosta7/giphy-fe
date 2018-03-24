import React from 'react';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Navigation from '../../components/Navigation';
import './style.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet defaultTitle="Giphinator" titleTemplate="Giphinator | %s">
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Search GIFs from the GIPHY API. " />
        </Helmet>
        <Navigation searches={this.props.searches} />
        {renderRoutes(this.props.route.routes)}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  searches: state.searches.map(term => ({
    term,
    count: state.pagination.searches[term] ? state.pagination.searches[term].total_count : 0,
  })),
});

export default connect(mapStateToProps)(App);
