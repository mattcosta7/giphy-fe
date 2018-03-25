import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import classnames from 'classnames';
import GifSearchBox from '../../containers/GifSearchBox';
import homeImg from '../../assets/favicon/giphy.gif';
import Styles from './styles.scss';

class Navigation extends React.Component {
  render() {
    const showSearchLinks = this.props.searches && this.props.searches.length > 0;
    return (
      <nav className={classnames(Styles.nav, this.props.showNavMenu && Styles.show)}>
        <Link
          to={{
            pathname: '/',
          }}
          onClick={this.props.toggleShowMenu}
        >
          <img alt="logo" src={homeImg} />
        </Link>
        <ul className={Styles['nav-list']}>
          <li>
            <NavLink
              to={{
                pathname: '/',
              }}
              onClick={this.props.toggleShowMenu}
            >
              Trending
            </NavLink>
          </li>
          <li>
            <GifSearchBox />
          </li>
          {showSearchLinks && (
            <React.Fragment>
              <h3>Recent Searches</h3>
              <li className={Styles['recent-searches-container']}>
                <ul className={Styles['recent-searches']}>
                  {this.props.searches.map(search => (
                    <li key={search.term}>
                      <NavLink
                        to={{
                          pathname: `/${search.term}`,
                        }}
                        onClick={this.props.closeNavMenu}
                      >
                        {search.term} ({search.count})
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  searches: PropTypes.arrayOf(PropTypes.shape({
    term: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  })).isRequired,
  showNavMenu: PropTypes.bool.isRequired,
  toggleShowMenu: PropTypes.func.isRequired,
  closeNavMenu: PropTypes.func.isRequired,
};

export default Navigation;
