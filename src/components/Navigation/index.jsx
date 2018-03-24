import React from 'react';
import { NavLink } from 'react-router-dom';
import GifSearchBox from '../../containers/GifSearchBox';
import Styles from './styles.scss';

export default function Navigation(props) {
  const showSearchLinks = props.searches && props.searches.length > 0;
  return (
    <nav className={Styles.nav}>
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
        {showSearchLinks &&
          props.searches.map(search => (
            <li key={search}>
              <NavLink
                to={{
                  pathname: `/${search}`,
                }}
              >
                {search}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}
