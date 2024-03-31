import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeer: '00:00'}
  onClickToStart = () => {
    this.timerId = setInterval(this.timeIncrementer, 1000)
  }

  timeIncrementer = () => {
    const {timeer} = this.state
    const splittedTimeer = timeer.split(':')

    const minutes = parseInt(splittedTimeer[0])
    const seconds = parseInt(splittedTimeer[1])

    if (minutes === 0) {
      if (seconds < 9) {
        this.setState({timeer: `0${minutes}:0${seconds + 1}`})
      } else if (seconds < 60) {
        this.setState({timeer: `00:${seconds + 1}`})
      }
    } else if (seconds === 60 && minutes < 9) {
      this.setState({timeer: `0${minutes + 1}:00`})
    } else if (seconds < 9 && minutes <= 9) {
      this.setState({timeer: `0${minutes}:0${seconds + 1}`})
    } else if (seconds < 60 && minutes <= 9) {
      this.setState({timeer: `0${minutes}:${seconds + 1}`})
    } else if (seconds < 9 && minutes >= 9) {
      if (seconds < 60 && minutes < 9) {
        this.setState({timeer: `0${minutes}:${seconds + 1}`})
      }
    } else if (seconds === 60 && minutes === 9) {
      this.setState({timeer: `${minutes + 1}:00`})
    }
    if (seconds < 9 && minutes > 9) {
      this.setState({timeer: `${minutes}:0${seconds + 1}`})
    } else if (seconds < 60 && minutes > 9) {
      this.setState({timeer: `${minutes}:${seconds + 1}`})
    } else if (seconds === 60 && minutes >= 9) {
      this.setState({timeer: `${minutes + 1}:00`})
    }
  }
  onClickToStop = () => {
    clearInterval(this.timerId)
  }
  onClickToReset = () => {
    const {timeer} = this.state
    clearInterval(this.timerId)
    this.setState({timeer: '00:00'})
  }
  render() {
    const {timeer} = this.state

    return (
      <div className="bg-container">
        <div className="timer-container">
          <h1>Stopwatch</h1>
          <div className="stopwatch">
            <div className="stopwatch-timer">
              <img
                alt="stopwatch"
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p>Timer</p>
            </div>
            <h1>{timeer}</h1>
            <div className="btns-container">
              <button onClick={this.onClickToStart} className="start-btn btn">
                Start
              </button>
              <button onClick={this.onClickToStop} className="stop-btn btn">
                Stop
              </button>
              <button onClick={this.onClickToReset} className="reset-btn btn">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
