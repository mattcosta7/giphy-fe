import React from 'react';
import Styles from './styles.scss';

const initialState = {
  submitting: false,
  term: '',
};

export default class GifSearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.clearTerm = this.clearTerm.bind(this);
    this.resetState = this.resetState.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      ...initialState,
    };
  }

  handleChange(e) {
    if (this.state.submitting) return;
    this.setState({
      term: e.target.value,
    });
  }

  handleKeyUp(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    const { term } = this.state;
    if (term.trim().length === 0) return;
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

  clearTerm() {
    this.setState({
      term: initialState.term,
    });
  }

  resetState() {
    this.setState({
      ...initialState,
    });
  }

  search(term) {
    this.props
      .search(term)
      .then(this.resetState)
      .then(() => this.props.history.push(term));
  }

  render() {
    return (
      <div className={Styles['input-container']}>
        <input
          className={Styles.input}
          onChange={this.handleChange}
          type="text"
          value={this.state.term}
          disabled={this.state.submitting}
          onKeyUp={this.handleKeyUp}
          placeholder="Search Giphy"
        />
        {this.state.term.trim() && (
          <button className={Styles['clear-icon']} type="button" onClick={this.clearTerm}>
            <span role="img" aria-label="clear">
              &#x2715;
            </span>
          </button>
        )}
        <button
          className={Styles['search-icon']}
          type="button"
          onClick={this.handleSubmit}
          disabled={this.state.term.trim().length === 0}
        >
          <span role="img" aria-label="search">
            &#x1f50d;
          </span>
        </button>
      </div>
    );
  }
}
