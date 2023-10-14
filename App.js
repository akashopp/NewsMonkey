import React, { Component } from 'react'
import Navbar from './Components/NavBar'
import News from './Components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title='NewsMonkey'/>
        <News/>
      </div>
    )
  }
}
