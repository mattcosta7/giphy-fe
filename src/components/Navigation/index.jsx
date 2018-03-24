import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import GifSearchBox from '../../containers/GifSearchBox';
import homeImg from '../../assets/favicon/giphy.gif';
import Styles from './styles.scss';

export default function Navigation(props) {
  const showSearchLinks = props.searches && props.searches.length > 0;
  return (
    <nav className={Styles.nav}>
      <Link
        to={{
          pathname: '/',
        }}
      >
        <img alt="logo" src={homeImg} />
      </Link>
      <ul>
        <li>
          <NavLink
            to={{
              pathname: '/',
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <GifSearchBox />
        </li>
        {showSearchLinks && (
          <li>
            <h3>Recent Searches</h3>
            <ul>
              {props.searches.map(search => (
                <li key={search.term}>
                  <NavLink
                    to={{
                      pathname: `/${search.term}`,
                    }}
                  >
                    {search.term} ({search.count})
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </nav>
  );
}
