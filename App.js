import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import SideBar from './components/sidebar';
import NewsContainer from './containers/newsContainer';

class App extends Component {
  render() {
    return (
	    <div className="App">
	      <Header />
	      <SideBar />
	      <NewsContainer tag={this.props.match.params.tag}/>
	    </div>
    );
  }
}

export default App;
