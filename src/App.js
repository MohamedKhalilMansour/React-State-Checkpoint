import {Component} from 'react';
import persImg from './ProfilePhoto.jpg';

class App extends Component {
  constructor () {
super();
this.state = {
  show : true,
  Person : { fullName : "Mohamed Khalil Mansour",
  bio : "Hello , my name is Mohamed Khalil Mansour and i like React",
  imgSrc : persImg,
  profession : "Full-Stack js Developper"},
  count:0
}
this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    this.setState(function (prevState){
      return {
        show : !prevState.show ,
      }
    });
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({count:this.state.count+1})
    }, 1000);  
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component did update');
  }
  render () {
    if (this.state.show) {
    return (
      <div className = "container">
        <button className = "btn" onClick={this.handleClick}>Hide It!</button>
        <br/>
        <img src={persImg} width="250px" height="250px" alt="personal image" />
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <h2>{this.state.Person.profession}</h2>
        <h3>{this.state.count}</h3>
      </div>
    );
  }
    else { return (
      <div className="container">
        <button className="btn" onClick={this.handleClick}>Show It!</button>
      </div>
    );
  }
  }
}
export default App;
