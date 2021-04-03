import react,{Component} from 'react';
import  './about.css'


class About extends Component{
	render(){
		return(
			<>
			<div className="aboutPara">
			<div className="internalMain">
			<div>
			<h3 style={{textAlign:'center',fontSize:'30px',marginBottom:'20px'}}>About Us</h3>
			<div>Groww is an investing platform where users can find the best mutual funds to invest in and can invest their money without any hassles. Groww provides objective evaluation of mutual funds and does not advice or recommend any mutual fund or portfolios. Investor shall invest with their own descretion. Groww does not guarantee any returns and safety of capital.
Groww helps investors in the following way</div>
  <div>· By providing objective evaluation of products available on Groww</div>
   <div> · By bringing up red flags, if any, involved in the products. However Groww does not guarantee to bring out all red flags</div>
    <div>  · By being transparent about fees and charges involved in investing in a product</div>
       <div> · By clearly representing the risk associated with buying a product</div></div>

        <div className="secureTran"><div>SECURE TRANSACTIONS ON GROWW</div>
        <div>All transactions on Groww are safe and secure. Users can invest through SIP or Lumpsum using Netbanking through all supported banks. It uses BSE Star MF </div>

<div className="mutual">MUTUAL FUNDS SAHI HAI</div>
<div>Mutual fund investments are very popular with individual investors because of the benefits they provide. Among the many advantages, the most important factors that drive investors to mutual funds are that Investors can</div>
<div>- Start with any amount (as low as 500)</div>
<div>- Diversify across multiple stocks and other instruments like debt, gold etc.</div>
<div>- Start automated monthly investments (SIP)</div>
<div>- Invest without requiring to open DMAT account</div>
<div>All type of mutual funds are available on Groww.</div>
</div>

<div className="invest"><div>INVESTING IN MUTUAL FUND PORTFOLIOS</div>

<div>Portfolio is collection of mutual funds designed to meet your investment goals. Investing in mutual fund portfolios helps you in diversifying your investments and reduces the risk. Portfolios also help you in assigning an investment goals and make it easy for you to save for and achieve your goals. You can create a portfolio yourself or ask an expert to build it for you.</div>

</div>
<div  className="investors">ATTENTION INVESTORS</div>

<div>· Investors should be cautious on unsolicited emails and SMS advising to buy, sell or hold securities and trade only on the basis of informed decision. Investors are advised to invest after conducting appropriate analysis of respective companies and not to blindly follow unfounded rumours, tips etc. Further, you are also requested to share your knowledge or evidence of systemic wrongdoing, potential frauds or unethical behaviour through the anonymous portal facility provided on BSE & NSE website.</div>

<div>· Awareness regarding guidelines on Margin collection</div>
<div>1. Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020.</div>
<div>2. Update your mobile number & email Id with your stock broker/depository participant and receive OTP directly from depository on your email id and/or mobile number to create pledge.</div>
<div>3. Pay 20% upfront margin of the transaction value to trade in cash market segment.</div>
<div>4. Investors may please refer to the Exchange's Frequently Asked Questions (FAQs) issued vide circular reference NSE/INSP/45191 dated July 31, 2020 and NSE/INSP/45534 dated August 31, 2020 and other guidelines issued from time to time in this regard.</div>
</div>
</div>


			</>

			)
	}
}

export default About;