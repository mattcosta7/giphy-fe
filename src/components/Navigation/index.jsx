import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classnames from 'classnames';
import GifSearchBox from '../../containers/GifSearchBox';
import homeImg from '../../assets/favicon/giphy.gif';
import Styles from './styles.scss';

export default function Navigation(props) {
  const showSearchLinks = props.searches && props.searches.length > 0;
  return (
    <nav className={classnames(Styles.nav, props.showNavMenu && Styles.show)}>
      <Link
        to={{
          pathname: '/',
        }}
        onClick={props.toggleShowMenu}
      >
        <img alt="logo" src={homeImg} />
      </Link>
      <ul className={Styles['nav-list']}>
        <li>
          <NavLink
            to={{
              pathname: '/',
            }}
            onClick={props.toggleShowMenu}
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
                {props.searches.map(search => (
                  <li key={search.term}>
                    <NavLink
                      to={{
                        pathname: `/${search.term}`,
                      }}
                      onClick={props.toggleShowMenu}
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
