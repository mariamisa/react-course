import React,{Component} from 'react'
import Axios from "axios";

import Card from './Card'

import './CardList.css'

export default class CardList extends Component {
    state = {
        monsters: [],
      };

    componentDidMount() {
        Axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
          this.setState({ monsters: data });
        });
      }
    render(){
        const {
            state: { monsters },props:{searchValue}
          } = this;
          const filteredData = monsters.filter(({ name }) =>
          name.toLowerCase().includes(searchValue.toLowerCase())
          );
        return (
            <div className="card-list">
                {filteredData.map((monster) => (
              <Card key={monster.id} monster={monster}></Card>
            ))}
            </div>
        )
    }
}
