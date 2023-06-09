// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onClicking = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {resources} = this.props

    const {emojis, loveEmojiUrl} = resources

    const {isClicked} = this.state

    console.log(loveEmojiUrl)

    let authButton = ''

    let authButton1 = ''

    if (isClicked === false) {
      authButton = (
        <li>
          <div className="card-container">
            <h1 className="feed-question">
              How satisfied are you with our customer support Performance?
            </h1>
            <div className="emojis-container">
              {emojis.map(eachEmoji => (
                <div className="emoji-container">
                  <button
                    type="button"
                    className="button"
                    onClick={this.onClicking}
                  >
                    <img
                      src={eachEmoji.imageUrl}
                      alt={eachEmoji.name}
                      className="emoji"
                    />
                  </button>
                  <p className="emoji-name">{eachEmoji.name}</p>
                </div>
              ))}
            </div>
          </div>
        </li>
      )
      authButton1 = null
    } else {
      authButton = null

      authButton1 = (
        <div className="feedback-card-container">
          <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
          <h1 className="thank-you">Thank You!</h1>
          <p className="feed-back-description">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <ul>
          {authButton}
          {authButton1}
        </ul>
      </div>
    )
  }
}

export default Feedback
