import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { search } from '../../actions/SearchActions';
import GifSearchBox from './GifSearchBox';

const mapDispatchToProps = {
  search,
};

const SmartGifSearchBox = connect(undefined, mapDispatchToProps)(GifSearchBox);

export default withRouter(SmartGifSearchBox);
