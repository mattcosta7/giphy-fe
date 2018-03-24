import React from 'react';
import { NavLink } from 'react-router-dom';
import GifSearchBox from '../../containers/GifSearchBox';

export default function Navigation(props) {
  const showSearchLinks = props.searches && props.searches.length > 0;
  return (
    <nav>
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
        <GifSearchBox />
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
