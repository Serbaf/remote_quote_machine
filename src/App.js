import logo from './logo.svg';
import './App.css';
import React from 'react';

const QUOTES = [
  {
    quote: "Estoy a tope, jefe de equipo. ¡SAAAANGREEEEE!",
    author: "Espartaco"
  },
  {
    quote: "En la Liga, a full. En la Copa, a full. En la Champions, a full",
    author: "Unai Emery"
  },
  {
    quote: "Lo único que sabemos de ese señor es que es un narcotraficante",
    author: "Asier del Horno"
  },
  {
    quote: "Amo la destrucción, como el viento a la tormenta",
    author: "Desakato"
  },
  {
    quote: "¿Qué han hecho los romanos por nosotros?",
    author: "Brayan"
  },
]

class DisplayQuote extends React.Component {
  constructor(props) {
    super(props);
    let initial_quote = this.select_quote();
    this.state = {
      quote: initial_quote.quote,
      author: initial_quote.author
    };
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  select_quote() {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
  }

  getRandomQuote() {
    let quote = this.select_quote();
    this.setState({
      quote: quote.quote,
      author: quote.author
    });
  }

  render() {
    const quote = this.select_quote();
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light" style={{ color: "white" }}>
        <div className="p-5 bg-primary rounded ">

          <div id="quote-box" className="container">

            <div className="row">
              <div className="col-12">
                <div id="text">
                  <h3>{this.state.quote}</h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div id="author" className="d-flex justify-content-end">
                  <p className="p-1 me-4">By {this.state.author}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="col-12">
                <button id="new-quote" className="btn btn-warning" type="button" onClick={this.getRandomQuote}>Get a new quote</button>
                <a id="tweet-quote" href="twitter.com/intent/tweet"></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }


}

function App() {
  return (
    <div className="App">
      <DisplayQuote />
    </div>
  );
}

export default App;
