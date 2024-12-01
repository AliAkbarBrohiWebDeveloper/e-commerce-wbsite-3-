import React from 'react'
import Wrapper from './Wrapper'

const Footer = () => {
  return (
    <Wrapper>
    <footer className='mt-16 md:mt-28'>
<div className='bg-slate-500 text-white py-6 px-6 mt-6'>

<div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6'>
  <div>

    <ul>

      <li className='text-2xl font-bold'>

       MegaMart 
      </li>
      <li className='mt-3'>Contact Us</li>
      <li>Whats App
      +1 202-918-2132</li>
      <li>Call Us
      +1 202-918-2132</li>
      <li>Download App</li>
    </ul>

  </div>
  <div>

    <ul>

      <li className='text-xl font-bold underline'>Most Popular Categories</li>
      <li className='mt-3'>Staples</li>
<li>Beverages</li>
<li>Personal Care</li>
<li>Home Care</li>
<li>Baby Care</li>
<li>Vegetables & Fruits</li>
<li>Snacks & Foods</li>
<li>Dairy & Bakery</li>
    </ul>
  </div>
  <div>

    <ul>

      <li className='text-xl font-bold underline'>Customer Services</li>
      <li className='mt-3'>About Us</li>
 <li>Terms & Conditions</li>
<li>FAQ</li>
<li>Privacy Policy</li>
<li>E-waste Policy</li>
<li>Cancellation & Return Policy</li>
    </ul>
  </div>




</div>

<div>
        <div className='flex justify-center align-center font-bold mt-9'>
          <p>&copy; 2024 MegaMart.com. All rights reserved</p>
        </div>
      </div>


</div>

        
    </footer>
    </Wrapper>
  )
}

export default Footer