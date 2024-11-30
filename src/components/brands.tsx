import { Key } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
const Images=[{
    

src:"/group1.png"
},

{
    
    src:"/group2.png"
},
{
    
    src:"/group3.png"
}

]

const Brands = () => {
  return (
    <section className='px-3 text-xl font-bold mt-9'>

<h4>Top Electronics Brands</h4>

<div className='flex flex-col md:flex-row justify-center gap-x-2 items-center mt-9' >

{
    Images.map((images,i)=>{
        return(

<div key={i}   data-aos="flip-down">
<Image src={images.src} alt='Photoes' height={400} width={400} className='hover:scale-105 duration-300'/>

</div>


        )
    })
}



</div>

    </section>
  )
}

export default Brands