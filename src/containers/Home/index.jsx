import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from './Home';
import { fetchTrending } from '../../actions/TrendingActions';
import hotReload from '../../helpers/hotloader-helper';

const mapStateToProps = state => ({
  gifs: state.gifs.trending.map(id => state.gifs.byId[id]),
  offset: state.pagination.trending.offset,
  loading: state.loading.trending,
});
const mapDispatchToProps = {
  fetchTrending,
};

const SmartHome = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

export default hotReload(module, SmartHome);
