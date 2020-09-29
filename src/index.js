import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

/*
* A simple React component
*/
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author:''
    };
    this.handleClick = this.handleClick.bind(this)
    this.getQuote = this.getQuote.bind(this)
  }

  getQuote() {
    let quotes = [
      ["this is a quote", "somebody1"],
      ["this is another quote", "somebody2"],
      ["this is third", "somebody3"]
    ];
    let random = Math.floor(Math.random() * 3);
    let quote = quotes[random][0];
    let author = quotes[random][1];
    this.setState({ quote: quote });
    this.setState({ author: author });
  }

  componentDidMount() {
      this.getQuote();
  }

  handleClick() {
    this.getQuote();
  }

  render() {
    return (
      <div>
      <h1 id="title">Random Quote Machine</h1>
      <span id="text"><p>{this.state.quote}</p></span>
      <span id="author">{this.state.author}</span>
      <hr style={{"color": "gold"}}/>
      <button id="new-quote" onClick={this.handleClick}>New quote</button>
      <a id="tweet-quote" title="Tweet this quote!" href="twitter.com/intent/tweet" target="_blank">
      <button>Tweet</button></a>
      <a id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
      <button>Tumblr</button></a>
      </div>
    );
  }
};

/*
* Render the above component into the div#app
*/
ReactDOM.render(<DisplayMessages />, document.getElementById("app"));
