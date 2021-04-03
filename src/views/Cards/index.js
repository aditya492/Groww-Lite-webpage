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


// Groww is an investing platform where users can find the best mutual funds to invest in and can invest their money without any hassles. Groww provides objective evaluation of mutual funds and does not advice or recommend any mutual fund or portfolios. Investor shall invest with their own descretion. Groww does not guarantee any returns and safety of capital.
// Groww helps investors in the following way
//   · By providing objective evaluation of products available on Groww
//     · By bringing up red flags, if any, involved in the products. However Groww does not guarantee to bring out all red flags
//       · By being transparent about fees and charges involved in investing in a product
//         · By clearly representing the risk associated with buying a product
//         SECURE TRANSACTIONS ON GROWW
//         All transactions on Groww are safe and secure. Users can invest through SIP or Lumpsum using Netbanking through all supported banks. It uses BSE Star MF 

// MUTUAL FUNDS SAHI HAI
// Mutual fund investments are very popular with individual investors because of the benefits they provide. Among the many advantages, the most important factors that drive investors to mutual funds are that Investors can
// - Start with any amount (as low as 500)
// - Diversify across multiple stocks and other instruments like debt, gold etc.
// - Start automated monthly investments (SIP)
// - Invest without requiring to open DMAT account
// All type of mutual funds are available on Groww.

// INVESTING IN MUTUAL FUND PORTFOLIOS

// Portfolio is collection of mutual funds designed to meet your investment goals. Investing in mutual fund portfolios helps you in diversifying your investments and reduces the risk. Portfolios also help you in assigning an investment goals and make it easy for you to save for and achieve your goals. You can create a portfolio yourself or ask an expert to build it for you.


// ATTENTION INVESTORS

// · Investors should be cautious on unsolicited emails and SMS advising to buy, sell or hold securities and trade only on the basis of informed decision. Investors are advised to invest after conducting appropriate analysis of respective companies and not to blindly follow unfounded rumours, tips etc. Further, you are also requested to share your knowledge or evidence of systemic wrongdoing, potential frauds or unethical behaviour through the anonymous portal facility provided on BSE & NSE website.

// · Awareness regarding guidelines on Margin collection
// 1. Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020.
// 2. Update your mobile number & email Id with your stock broker/depository participant and receive OTP directly from depository on your email id and/or mobile number to create pledge.
// 3. Pay 20% upfront margin of the transaction value to trade in cash market segment.
// 4. Investors may please refer to the Exchange's Frequently Asked Questions (FAQs) issued vide circular reference NSE/INSP/45191 dated July 31, 2020 and NSE/INSP/45534 dated August 31, 2020 and other guidelines issued from time to time in this regard.

// 4. Investors may please refer to the Exchange's Frequently Asked Questions (FAQs) issued vide circular reference NSE/INSP/45191 dated July 31, 2020 and NSE/INSP/45534 dated August 31, 2020 and other guidelines issued from time to time in this regard.





