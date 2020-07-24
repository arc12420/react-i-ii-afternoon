import React, { Component } from "react";
import data from "./Components/data";
import "./Components/Style.css";
import "./Components/Formulas.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      data: data,
    };
  }
  next() {
    const { data, index } = this.state;
    if (index < data.length - 1) {
      this.setState({ index: index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  }
  previous() {
    const { data, index } = this.state;
    if (index > 0) {
      this.setState({ index: index - 1 });
    } else {
      this.setState({ index: data.length - 1 });
    }
  }

  render() {
    console.log(this.state);
    const { data, index } = this.state;

    return (
      <div className="App">
        <header>
          <h2>Home</h2>
        </header>
        <div className="body">
          <div className="WhiteBox">
            <div className="Pg"><b>
              {index + 1}/{data.length}</b>
            </div>

            <h1 className="name">              
              <b>
                {data[index].name.first} {data[index].name.last}
              </b>
            </h1>
            <br></br>
            <div className="city">
              <b>From:</b> {data[index].city}, {data[index].country}
            </div>
            <div className="job">
              <b>Job Title:</b> {data[index].title}
            </div>
            <div className="boss">
              <b>Employer:</b> {data[index].employer}
            </div>
            <br />
            <div className="movies">
              <b>Favorite Movies:</b>
            </div>
            <ol>
              {data[index].favoriteMovies.map((element, index) => {
                return <li>{element}</li>;
              })}
            </ol>
          </div>
          <div className="buttons">
          <button
            onClick={() => {
              this.previous();
            }}
          >
            &lt;Previous
          </button>
          <button
            onClick={() => {
              this.next();
            }}
          >
            Next&gt;
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// what needs to happen in this page.
// This page needs to render all of the information together
// this page needs to count the index and increase the index by one per button click
// The information on the screen then needs to be changeable. NAME CITY COUNTRY EMPLOYER TITLE FAVORITE MOVIES
