import { connect } from 'react-redux';
import Home from './Home';
import { fetchTrending } from '../../actions/TrendingActions';
import hotReload from '../../helpers/hotloader-helper';

const mapStateToProps = state => ({
  trendingGifs: state.gifs.allIds.map(id => state.gifs.byId[id]),
});
const mapDispatchToProps = {
  fetchTrending,
};

const SmartHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default hotReload(module, SmartHome);
