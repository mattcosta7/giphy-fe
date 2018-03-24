import React from 'react';
import { connect } from 'react-redux';
import { addTerm } from '../../actions/SearchActions';

class Search extends React.Component {
  componentDidMount() {
    if (!this.props.searchInNav) {
      this.props.addTerm(this.props.match.params.term);
    }
  }

  render() {
    return (
      <div>
        <h1> GIF search results for &quot;{this.props.match.params.term}&quot; </h1>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  searchInNav: state.searches && state.searches.find(search => search === props.match.params.term),
});

const mapDispatchToProps = {
  addTerm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
