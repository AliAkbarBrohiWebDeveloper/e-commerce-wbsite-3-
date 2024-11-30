import React from 'react'
import Image1 from "/public/image1.png"
import Image from 'next/image'
Image

const Hero = () => {
  return (
    <main className='px-1 md:px-2 mt-28 ' >
    <section  className='h-[600px] md:h-[500px]' style={{backgroundImage:'url("/bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    }}>

<div className='  flex  flex-col md:flex-row justify-around items-center text-white py-2 md:py-28 '>

<div className='mx-5'>


<h4 className='text-xl'>Best Deal Online on smart watches</h4>
<h1 className='text-5xl font-bold mt-5'>SMART WEARABLE.</h1>
<h6 className='text-xl mt-4'>UP to 80% OFF</h6>
<button className='px-6 py-2 bg-red-500 rounded-lg  hover:scale-105 duration-300 mt-8' >Buy Now</button>


</div>

<div className='mt-12 md:mt-9'>

<Image src={Image1} alt='Watch'></Image>

</div>


</div>


    </section>
    </main>
  )
}

export default Hero