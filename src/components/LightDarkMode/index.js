// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {colorChange: 'dark'}

  clickChange = () => {
    this.setState(prevState => {
      if (prevState.colorChange !== 'dark') {
        return {colorChange: 'dark'}
      }
      return {colorChange: 'light'}
    })
  }

  render() {
    const {colorChange} = this.state

    return (
      <div className="container">
        <div
          className={
            colorChange === 'dark'
              ? 'darkBackgroundMode'
              : 'lightBackgroundMode'
          }
        >
          <h1
            className={colorChange === 'dark' ? 'lightHeading' : 'darkHeading'}
          >
            Click To Change Mode
          </h1>
          <button className="changeButton" onClick={this.clickChange}>
            {colorChange === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
