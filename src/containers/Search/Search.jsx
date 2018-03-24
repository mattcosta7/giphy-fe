import React from 'react';
import GifList from '../../components/GifList';
import { NEXT_DIRECTION, PREVIOUS_DIRECTION } from '../../constants/SearchDirectionConstants';
import Styles from './styles.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.search({ term: this.props.term, direction: PREVIOUS_DIRECTION });
  }

  handleScroll(e) {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      this.props.search({ term: this.props.term, direction: NEXT_DIRECTION });
    } else if (e.target.scrollHeight - e.target.scrollTop === e.target.scrollHeight) {
      this.props.search({ term: this.props.term, direction: PREVIOUS_DIRECTION });
    }
  }

  render() {
    return (
      <div className={Styles.container}>
        <h1> GIF search results for &quot;{this.props.term}&quot; </h1>
        {this.props.gifs && <GifList handleScroll={this.handleScroll} gifs={this.props.gifs} />}
      </div>
    );
  }
}
