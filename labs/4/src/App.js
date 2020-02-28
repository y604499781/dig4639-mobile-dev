import React from 'react';
import './App.css';
import CardList from './components/CardList/index.js';

class App extends React.Component {
  removeTask(id) {
    let data = this.state.data
    data = data.filter((v) => v.id !== id)
    this.setState({data})
  }
  render() {
    return ( 
      <CardList /> 
    )
  }
}

export default App;
