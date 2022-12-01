import React, { Component } from "react";
import { CardList } from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
// import { robots } from "../robots";
import "./App.css";

const state = {
  robots: [],
  searchfield: "",
};

// const App = ({ robots }) => {
//   return (
//     <div className="tc">
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   );
// };

class App extends Component {
  constructor() {
    super();
    this.state = state;
  }
  componentDidMount() {
    const url = new URL(`https://jsonplaceholder.typicode.com/users`);
    fetch(url)
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((e) => {
      return e.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <div>
        <h1>Loading...</h1>
      </div>
    ) : (
      <div className="tc">
        <h1 className="f1">ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
