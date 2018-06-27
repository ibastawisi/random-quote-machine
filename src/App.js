import React, { Component, Fragment } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

class App extends Component {

  state = {
    quotes: [],
    randomQuote: null
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(rsp => rsp.json())
      .then(quotes => this.setState(quotes))
      .catch(e=> console.log(e)
      )
  }

  componentDidUpdate(prevProps, prevState) {
    this.state.quotes !== prevState.quotes && this.getRandomQuote()
  }

  getRandomQuote = () => {
    this.setState({
      randomQuote: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
    })
  }

  tweetQuote = () => {
    window.open(('https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent(
      `"${this.state.randomQuote.quote}" -${this.state.randomQuote.author}`
    )))
  }

  render() {
    const { randomQuote } = this.state
    return (
      <div className='container-fluid h-100 d-flex justify-content-center align-items-center bg-dark'>
        <div className='card mx-auto' style={{ minWidth:300, maxWidth: 500 }}>
          <div className='card-body'>
            <div className="card-text text-center pt-3">
              <i className="fa fa-quote-left mr-2 h4"> </i>
              <span className='h4'>
                {randomQuote ? randomQuote.quote :
                  <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                  </div>}
              </span>
            </div>{randomQuote &&
              <Fragment>
                <div className="d-flex justify-content-end mt-2 mr-2 mb-3">
                  - <span className='text-muted'>{randomQuote && randomQuote.author}</span>
                </div>
                <div className="buttons d-flex">
                  <a className="btn my-auto" title="Tweet this quote!" target="_blank" onClick={this.tweetQuote}>
                    <i className="fab fa-twitter-square h3"></i>
                  </a>
                  <button className="btn btn-primary ml-auto" onClick={this.getRandomQuote}>New quote</button>
                </div>
              </Fragment>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
