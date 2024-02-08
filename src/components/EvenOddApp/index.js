// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const incermentThenumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + incermentThenumber}))
  }

  render() {
    const {count} = this.state
    const displayTheText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        <p className="description">Count is {displayTheText}</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="para">Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
