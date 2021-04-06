import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';
import {Link} from 'react-router-dom'
import {Products,RevProduct} from '../Products';

function Cards() {

  return (
    <>
    <div className='cards'>
      <h1>Check Out Our Products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/stocks.png'
              text='Invest in Stocks'
              label='Stocks'
              path='/stocks'
            />
           
            <CardItem
              src='images/gold.png'
              text='Invest in Gold or Start monthly SIP'
              label='Gold'
              path='/gold'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/us.png'
              text='Invest in US Stocks'
              label='US Stocks'
              path='/us'
            />
            <CardItem
              src='images/fd.png'
              text='FDs with 6% of interest rate'
              label='FDs'
              path='/fd'
            />
            <CardItem
              src='images/us.png'
              text='Get high returns'
              label='Mutual Funds'
              path='/mutualFund'
            />
          </ul>
        </div>
      </div>



      <div>

         <Products
         head='Zero'
         smallHead='account charges'
         para='You don’t have to pay a single rupee for opening a stocks account or account maintenance.'
         explore='Explore Stocks'
         /> 

         <RevProduct
          head=' 0% '
         smallHead='Commision'
         para='  Select from 5000+ direct mutual funds and get higher return than regular funds.'
         explore='Explore Mutual Funds'
         />

       
    </div> 
    <Link to='/products' style={{textDecoration:"none",color:"black"}}><p style={{textAlign:"center",marginTop:"40px"}}> Click Here For More Products</p></Link>
    </div>
   
    </>
  );
}

export default Cards;





