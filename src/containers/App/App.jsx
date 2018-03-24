import React from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import Styles from './style.scss';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet defaultTitle="Giphinator" titleTemplate="Giphinator | %s">
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Search GIFs from the GIPHY API. " />
        </Helmet>
        {renderRoutes(this.props.route.routes)}
      </React.Fragment>
    );
  }
}
