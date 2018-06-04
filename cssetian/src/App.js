import React, { Component } from 'react';
import './App.css';
import LifeLog from './LifeLog.js';
import Filters from './Filters.js';
import { TYPE_ALL } from './constants.js';

class App extends Component {
  constructor() {
    super();
    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      activeFilter: TYPE_ALL,
    };
  }

  handleFilter(value) {
    this.setState({ activeFilter: value });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Chris Setian, Human</h1>
        </header>
        <div className='App-body'>
          <Filters
            activeFilter={this.state.activeFilter}
            onFilter={this.handleFilter}
          />
          <LifeLog activeFilter={this.state.activeFilter} />
        </div>
      </div>
    );
  }
}

export default App;
