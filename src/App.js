import React from 'react';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div id = "main1" className = "container">
        <div className = "row">
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          className = "form-control-lg mx-5 mt-5 w-75"
          
        />
        </div>
        <br />
        <button onClick={this.ask} type = "button" className = "btn btn-outline-light mx-5 w-75">Ask the Magic Eight Ball!</button>
        
        <br />
        <div id = "exdiv">
        <div id = "ball-div">
        <div id = "ansdiv">

        <p className = "display-4 m-3">
          
          {answer}   
          
        </p>
        
        </div>
        </div>
        </div>
      </div>
    );
  }
  }