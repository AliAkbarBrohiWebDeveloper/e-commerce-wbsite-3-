import Image from 'next/image'
const MobilePhones=[{

src:"/mob1.png",
tittle:"Galaxy M13 (4GB | 64 GB )",
call:"₹32999",
save:"Save - ₹32999"



},

{

    src:"/mob2.png",
    tittle:"Galaxy M13 (4GB | 64 GB )",
    call:"₹10499",
    save:"Save - ₹45002999"
    
    
    
    },
    {

        src:"/mob3.png",
        tittle:"Galaxy M33 (4GB | 64 GB )",
        call:"₹16999",
        save:"Save - ₹80009"
        
        
        
        },
        {

            src:"/mob4.png",
            tittle:"Galaxy M53 (4GB | 64 GB )",
            call:"₹31999",
            save:"Save - ₹90009"
            
            
            
            },
            {

                src:"/mob5.png",
                tittle:"Galaxy M13 (4GB | 64 GB )",
                call:"₹67999",
                save:"Save - ₹18000"
                
                
                
                },
                                        
]

const Phones = () => {
  return (
    <section className='mt-16'>
        <h3 className='text-2xl font-bold px-3'>Grab the best deal on Smartphones</h3>
<div className='flex  flex-col md:flex-row justify-between items-center mt-4 px-3' >

{
    MobilePhones.map((products,index)=>{
return(
<div key={index} className=' mt-5' data-aos="zoom-in">
<Image src={products.src} alt='Mobile-phones' height={100} width={100} className='mx-16 hover:scale-105 duration-300'></Image>
<h3 className='text-xl text-center'>{products.tittle}</h3>
<h5 className='text-xl font-bold text-center'>{products.call}</h5>
<span className='text-green-600 mx-20 '>{products.save}</span>

</div>

)

})
}




</div>





    </section>
  )
}

export default Phones