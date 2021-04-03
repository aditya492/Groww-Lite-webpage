import React,{Component} from 'react';
import '../Cards/Cards.css'
import {Link} from 'react-router-dom'

 class Products extends Component{
 	constructor(props){
 		super(props)
 	}
	render(){
		return(
			<>
      <div style={{marginTop:"40px"}}  data-aos="flip-left">

      <div className="description">

     <img className="stocks" src="images/stocks.png"/>
     <div className="mainText">
    {this.props.head} <span className="smallText">{this.props.smallHead}</span>
     <div className="para">
     {this.props.para} 
    </div>
    <div>
    <button className="btn-stocks" ><Link to='/stocks' className="textDec">{this.props.explore}</Link></button>
    </div>
    </div>
    </div>
    </div>

			</>
			)
	}
}

 class RevProduct  extends Component{
 	constructor(props){
 		super(props)
 	}
	render(){
		return(
		<>
		   <div style={{marginTop:"40px"}} data-aos="flip-right">

      <div className="description">
    
     <div className="mainText">
      {this.props.head} <span className="smallText">{this.props.smallHead}</span>
     <div className="para">
    {this.props.para} 
    </div>
    <div>
    <button className="btn-stocks"><Link to='/mutualFund' className="textDec">{this.props.explore}</Link></button>
    </div>
    </div>
     <img className="stocks" src="images/gold.png"/>
    </div>

    </div> 


		</>
		)
	}
}

export {Products,RevProduct,}