import { Component } from "react";

import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import Layout from "./components/layout/Layout.jsx";

import "./App.css";

class App extends Component {
  state = {
    filtered: "",
  };

  searchChange = ({ target: { value } }) => {
    this.setState({ filtered: value });
  };
  render() {
    const {
      searchChange,
      state: { filtered },
    } = this;

    return (
      <div className="App">
        <Layout>
          <SearchBox
            placeHolder="search monster"
            searchChange={searchChange}
          ></SearchBox>
          <CardList searchValue={filtered}></CardList>
        </Layout>
      </div>
    );
  }
}

export default App;
