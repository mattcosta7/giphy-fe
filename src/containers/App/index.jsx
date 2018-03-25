import { connect } from 'react-redux';
import App from './App';
import hotReload from '../../helpers/hotloader-helper';
import { toggleShowNavMenu, closeNavMenu } from '../../actions/AppActions';

const mapStateToProps = state => ({
  searches: state.searches.map(term => ({
    term,
    count: state.pagination.searches[term] ? state.pagination.searches[term].total_count : 0,
  })),
  showNavMenu: state.app.showNavMenu,
});

const mapDispatchToProps = {
  toggleShowNavMenu,
  closeNavMenu,
};

export default hotReload(module, connect(mapStateToProps, mapDispatchToProps)(App));
