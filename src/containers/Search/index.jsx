import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from './Search';
import { search } from '../../actions/SearchActions';
import hotReload from '../../helpers/hotloader-helper';

const mapStateToProps = (state, props) => {
  const gifs = state.gifs.searches[props.match.params.term];

  return {
    loading: state.loading.searches[props.match.params.term],
    totalCount:
      state.pagination.searches[props.match.params.term] &&
      state.pagination.searches[props.match.params.term].total_count,
    term: props.match.params.term,
    gifs: gifs ? gifs.map(id => state.gifs.byId[id]) : [],
    offset:
      state.pagination.searches[props.match.params.term] &&
      state.pagination.searches[props.match.params.term].offset,
  };
};

const mapDispatchToProps = {
  search,
};

const SmartSearch = withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));

export default hotReload(module, SmartSearch);
