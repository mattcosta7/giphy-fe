import React from 'react';
import Helmet from 'react-helmet';
import GifList from '../../components/GifList';
import { NEXT_DIRECTION, PREVIOUS_DIRECTION } from '../../constants/SearchDirectionConstants';
import Styles from './styles.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    if (!this.props.loading) {
      this.props.search({ term: this.props.term, direction: PREVIOUS_DIRECTION });
    }
  }

  componentDidUpdate(lastProps) {
    if (lastProps.term !== this.props.term && !this.props.loading) {
      this.props.search({ term: this.props.term, direction: PREVIOUS_DIRECTION });
    }
  }

  handleScroll(e) {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      this.props.search({ term: this.props.term, direction: NEXT_DIRECTION });
    } else if (e.target.scrollHeight - e.target.scrollTop === e.target.scrollHeight) {
      this.props.search({ term: this.props.term, direction: PREVIOUS_DIRECTION });
    }
  }

  render() {
    const isLoading = this.props.loading && (!this.props.gifs || this.props.gifs.length === 0);

    return (
      <div className={Styles.container}>
        <Helmet>
          <title>Search | {this.props.term}</title>
        </Helmet>
        <h1>
          Showing {this.props.gifs.length} of {this.props.totalCount} search results for &quot;{
            this.props.term
          }&quot;
        </h1>
        {isLoading ? (
          'loading'
        ) : (
          <GifList handleScroll={this.handleScroll} gifs={this.props.gifs} />
        )}
      </div>
    );
  }
}

Search.defaultProps = {
  gifs: [],
  totalCount: 0,
};

export default Search;
