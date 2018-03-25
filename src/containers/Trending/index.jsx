import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Trending from './Trending';
import { fetchTrending } from '../../actions/TrendingActions';
import hotReload from '../../helpers/hotloader-helper';

const mapStateToProps = state => ({
  gifs: state.gifs.trending.map(id => state.gifs.byId[id]),
  loading: state.loading.trending,
});
const mapDispatchToProps = {
  fetchTrending,
};

const SmartTrending = withRouter(connect(mapStateToProps, mapDispatchToProps)(Trending));

export default hotReload(module, SmartTrending);
