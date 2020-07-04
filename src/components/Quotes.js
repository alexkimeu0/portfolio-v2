import React from "react";

import "./Quotes.css";

const API =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class Quotes extends React.Component {
  state = {
    quotes: [
      {
        quote:
          "Life isn’t about getting and having, it’s about giving and being.",
        author: "Kevin Kruse",
      },
    ],
    index: 0,
  };

  componentDidMount() {
    //call the API and update state
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            quotes: res.quotes,
          },
          this.getRandomIndex
        );
      });
  }

  getRandomIndex = () => {
    const { quotes } = this.state;
    if (quotes.length > 0) {
      const index = Math.floor(Math.random() * quotes.length);
      this.setState({
        index,
      });
    }
  };

  render() {
    const { quotes, index } = this.state;
    const quote = quotes[index];

    const tweetURL = `https://twitter.com/intent/tweet?text=${quote.quote} ~ ${quote.author}`;
    return (
      <div className="quotes-content">
        <p className="about">
          Random Quotes generated from the{" "}
          <a href="https://www.freecodecamp.org/">FreeCodeCamp</a> open source
          Quotes API. Click on the Twitter button to share your favorite quote
          on Twitter & the random button to generate random quote.
        </p>
        {quote && (
          <div className="quote">
            <i class="fa fa-quote-left fa-3x"> </i> &nbsp;
            <p id="text">{quote.quote}</p>
            <cite className="author">~ {quote.author}</cite>
            <div className="icons">
              <a
                href={tweetURL}
                target="_blank"
                className="btn"
                id="tweet-quote"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn" onClick={this.getRandomIndex}>
                <i className="fas fa-random"></i>
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Quotes;
