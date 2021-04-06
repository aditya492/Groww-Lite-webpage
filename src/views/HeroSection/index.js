import React,{Component} from 'react';
// import './App.css';
import { Button } from '../Button';
import './HeroSection.css';
import Cards from '../Cards'
import Footer from '../Footer'
import  {Link} from 'react-router-dom'

const textArray=['Gold','Stocks','FDs','Mutual Funds']
const color=['orange','lightgreen','red','yellow']

class HeroSection extends Component {
constructor(){
  super();
  this.state={textid:0};
}

componentDidMount(){
  let timeout=setInterval(()=>{
    let currentid=this.state.textid;
    this.setState({
      textid:currentid+1
    })
  },2000)
}

componentDidUnmount(){
  clearInterval(this.timeout)
}

  
   
  render(){
   
 let textchange=textArray[this.state.textid % textArray.length];
 let changecolor=color[this.state.textid % textArray.length];

  return (
  	<>
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Invest In <span style={{color:`${changecolor}`}}>{textchange}</span></h1>
      <p><b>Start Investing With Us!</b></p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Get Started <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  <Cards/>
  <Footer/>
  </>
  );
}
}

export default HeroSection;