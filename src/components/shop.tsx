import Image from "next/image"
import Wrapper from "./Wrapper"

const shop=[{

src:"/shop1.png",
tittle:"Mobile"



},

{

    src:"/shop2.png",
    tittle:"Cosmetics"
    
    
    
    },
    {

        src:"/shop3.png",
        tittle:"Electronics"
        
        
        
        },
        {

            src:"/shop4.png",
            tittle:"Furniture"
            
            
            
            },
            {

                src:"/shop5.png",
                tittle:"Watches"
                
                
                
                },
                {

                    src:"/shop6.png",
                    tittle:"Decor"
                    
                    
                    
                    },
                    {

                        src:"/shop7.png",
                        tittle:"Accessories"
                        
                        
                        
                        },
                                                                                    


]

const Shop = () => {
  return (
    <Wrapper>
    <section className=" mt-11">

<h3 className="text-xl font-bold">Shop From Top Categories</h3>
<div className="flex  flex-col md:flex-row justify-between items-center gap-x-3 mt-9">

{
    shop.map((items,index)=>{

return(
    <div key={index} data-aos="zoom-in">
<Image src={items.src} alt="Mobile" height={200} width={200} className="mt-3 hover:scale-105 duration-300"/>
<h3 className="text-center">{items.tittle}</h3>
    </div>
)


    })
}



</div>


    </section>
    </Wrapper>
  )
}

export default Shop