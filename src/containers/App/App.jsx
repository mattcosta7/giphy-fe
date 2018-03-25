import React from 'react';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Navigation from '../../components/Navigation';
import Styles from './style.scss';
import { toggleShowNavMenu } from '../../actions/AppActions';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet defaultTitle="Giphinator" titleTemplate="Giphinator | %s">
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Search GIFs from the GIPHY API. " />
        </Helmet>
        <Navigation
          toggleShowMenu={this.props.toggleShowNavMenu}
          showNavMenu={this.props.showNavMenu}
          searches={this.props.searches}
        />
        <div>
          <button className={Styles['menu-button']} onClick={this.props.toggleShowNavMenu}>
            <span role="img" aria-label="toggle-menu">
              &#9776;
            </span>
          </button>
          {renderRoutes(this.props.route.routes)}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  searches: state.searches.map(term => ({
    term,
    count: state.pagination.searches[term] ? state.pagination.searches[term].total_count : 0,
  })),
  showNavMenu: state.app.showNavMenu,
});

const mapDispatchToProps = {
  toggleShowNavMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
