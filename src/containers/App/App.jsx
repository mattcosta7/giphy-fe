import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import classnames from 'classnames';
import Navigation from '../../components/Navigation';
import GifSeachBox from '../GifSearchBox';
import Styles from './style.scss';

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
          closeNavMenu={this.props.closeNavMenu}
        />
        <div className={Styles.container}>
          <button className={Styles['menu-button']} onClick={this.props.toggleShowNavMenu}>
            {this.props.showNavMenu ? (
              <span role="img" aria-label="toggle-menu">
                &#x2715;
              </span>
            ) : (
              <span role="img" aria-label="toggle-menu">
                &#x2630;
              </span>
            )}
          </button>
          <GifSeachBox
            className={classnames(Styles['search-box'], this.props.showNavMenu && Styles.hide)}
          />
          {renderRoutes(this.props.route.routes)}
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  toggleShowNavMenu: PropTypes.func.isRequired,
  showNavMenu: PropTypes.bool.isRequired,
  searches: PropTypes.arrayOf(PropTypes.shape({
    term: PropTypes.string,
    count: PropTypes.number,
  })).isRequired,
  closeNavMenu: PropTypes.func.isRequired,
  route: PropTypes.shape({
    routes: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default App;
