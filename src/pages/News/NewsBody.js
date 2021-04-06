import React,{Component} from 'react'
import './news.css'


class NewsBody extends Component{
      constructor(props){
      	super(props);
      	this.state={
            data:[],
            searchterm:''
      	}
      }

		componentDidMount(){

    this.fetchData()

 		}

 		 fetchData=async()=>{
		 const gett=await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=add50697363f47e2b19c10d4e3710d5c')
         const resp=await gett.json()
         const url=resp.urlToImage
         console.log(url)
         this.setState({
         	data:resp.articles
         })
        }

       changeInput=(e)=>{
        	this.setState({
        		searchterm:e.target.value
        	})
        	console.log("hie")
        }



	render(){



 		console.log("articles",this.state.data)

 		const mapp=this.state.data.map(item=>{
 			     const imag=item.urlToImage
              	return <><div className="outerDiv"><img src={item.urlToImage}  className="image" /> <li className="list">{item.title}</li>
                  <div style={{float:"left"}}>{item.description}</div>
              	</div></>
              })

   	return(
			<>
             <div classname="mainBox">
              <h1>Groww times</h1>
              <input placeholder="search country" onChange={(e)=>this.changeInput(e)}/>
              {mapp}
             </div>
			</>
			)
	}
}

export default NewsBody;