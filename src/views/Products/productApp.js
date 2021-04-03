import React,{Component} from 'react';
import {Products} from './index.js'
import {RevProduct} from './index.js'
import './product.css'



class productApp extends Component{
render(){
	return(
		<>
		<p className="productHead"> Our Products</p>
		   <Products
         head='Zero'
         smallHead='account charges'
         para='You don’t have to pay a single rupee for opening a stocks account or account maintenance.'
         explore='Explore Stocks'
         image='stocks'
         /> 

         <RevProduct
          head=' 0% '
         smallHead='Commision'
         para='Select from 5000+ direct mutual funds and get higher return than regular funds.'
         explore='Explore Mutual Funds'
         image='stocks'
         />

         <Products
         head='99.9%'
         smallHead='purity'
         para='Invest in digital gold as low as ₹10 without any extra commission or making charges.'
         explore='Explore Gold'
         image='gold'
         /> 

         <RevProduct
          head='Free'
         smallHead='Account Opening'
         para='Invest in Apple, Google, Netflix and many more US companies that you love without any brokerage fee.'
         explore='Explore US Stocks'
         image='us'
         />

          <Products
         head='6.7%'
         smallHead='interest'
         para='Open fixed deposits in any bank with higher interest rates without opening a bank account.'
         explore='Explore FDs'
         image='fd'
         /> 

		</>
		)
}
}

export default productApp;