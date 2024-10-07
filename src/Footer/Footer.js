import './Footer.css'
import { FaFacebook, FaTwitter, FaPinterest,FaYoutube,FaInstagram } from 'react-icons/fa'
export default function Footer(){
  return( 
    <div className='footer'>
      <div className='footer_header'>
        <h3>Logo</h3> 
        <div className='logos_footer'>
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
            <FaYoutube />
            <FaInstagram />
        </div>

      </div>
      <p className='footer_extra'>© The World Travel Guy
         2024
             <br />
             <a >Affiliate Disclosures</a> •
             <a>Privacy Policy</a> •
             <a>Terms Of Use</a> 
             <br />
    
           Some of the pages on my travel blog contain affiliate links. Whenever you buy something through one of these links, I get a small commission 
          <strong> at no extra cost to you</strong>. 
          As an affiliate, I only recommend products and services that I feel are high quality and helpful to my readers.
       Thanks for your support.</p>
    </div>
  )
}