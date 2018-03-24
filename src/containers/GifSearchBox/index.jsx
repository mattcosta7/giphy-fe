import React from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions/SearchActions';

const initialState = {
  submitting: false,
  term: '',
};
class GifSearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      submitting: false,
      term: '',
    };
  }

  handleChange(e) {
    if (this.state.submitting) return;
    this.setState({
      term: e.target.value,
    });
  }

  handleSubmit() {
    const { term } = this.state;
    this.setState(
      {
        submitting: true,
        term: '',
      },
      () => {
        this.search(term);
      }
    );
  }

  resetState() {
    this.setState({
      ...initialState,
    });
  }

  search(term) {
    this.props.search(term).then(this.resetState);
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.term}
          disabled={this.state.submitting}
        />
        <button type="button" onClick={this.handleSubmit}>
          <span role="img" aria-label="search">
            &#128269;
          </span>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  search,
};

export default connect(undefined, mapDispatchToProps)(GifSearchBox);
