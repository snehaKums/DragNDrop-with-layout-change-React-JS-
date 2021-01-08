import React from 'react';
import './App.css';
import List from './List';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          newIndex: 1,
          comp: "Component 1"
        },
        {
          newIndex: 2,
          comp: "Component 2"
        },
        {
          newIndex: 3,
          comp: "Component 3"
        },
        {
          newIndex: 4,
          comp: "Component 4"
        },
        {
          newIndex: 5,
          comp: "Component 5"
        },
        {
          newIndex: 6,
          comp: "Component 6"
        },
        {
          newIndex: 7,
          comp: "Component 7"
        },
        {
          newIndex: 8,
          comp: "Component 8"
        },
        {
          newIndex: 9,
          comp: "Component 9"
        },
        {
          newIndex: 10,
          comp: "Component 10"
        }
      ]

    }
  }

render(){
    return (
      <div>
        <div>
      </div>
      <div >
        <List data={this.state.data} /> 
        </div>
      </div>
    )
  }
}
