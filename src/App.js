import { Component } from "react";
import Axios from "axios";

import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import Layout from "./components/layout/Layout.jsx";

import "./App.css";

class App extends Component {
  state = {
    monsters: [],
    filtered: "",
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      this.setState({ monsters: data });
    });
  }
  searchChange = ({ target: { value } }) => {
    this.setState({ filtered: value });
  };
  render() {
    const {
      searchChange,
      state: { monsters, filtered },
    } = this;
    const filteredData = monsters.filter(({ name }) =>
      name.toLowerCase().includes(filtered.toLowerCase())
    );
    return (
      <div className="App">
        <Layout>
          <SearchBox
            placeHolder="search monster"
            searchChange={searchChange}
          ></SearchBox>
          <CardList monsters={filteredData}></CardList>
        </Layout>
      </div>
    );
  }
}

export default App;
