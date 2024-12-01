import Image from "next/image"
import Wrapper from "./Wrapper"

const Fruits=[
    {

src:"/pic1.png",
tittle:"Daily Essentials",
price:"UP to 50% OFF"

},
{

    src:"/pic2.png",
    tittle:"Vegitables",
    price:"UP to 50% OFF"
    
    },
    {

        src:"/pic3.png",
        tittle:"Fruits",
        price:"UP to 50% OFF"
        
        },
        {

            src:"/pic4.png",
            tittle:"Strowberry",
            price:"UP to 50% OFF"
            
            },
            {

                src:"/pic5.png",
                tittle:"Mango",
                price:"UP to 50% OFF"
                
                },
                {

                    src:"/pic6.png",
                    tittle:"Cherry",
                    price:"UP to 50% OFF"
                    
                    },
                                                            

]

const Essan = () => {
  return (
    <Wrapper>
    <section className="mt-11 mr-24">

<h4 className="text-xl font-bold">Daily Essentials</h4>
<div className="container grid grid-cols-1 md:grid-cols-3" data-aos="zoom-in-down">

{
    Fruits.map((fruits,i)=>{
        return(
            <div key={i} className=" mt-11">

<Image src={fruits.src} alt="Fruits" height={200} width={200} className="hover:scale-105 duration-300 mx-28 mt-5"/>
<h4 className="ml-36">{fruits.tittle}</h4>
<h6 className="font-bold ml-36">{fruits.price}</h6>

            </div>
        )
    })
}

</div>



    </section>
    </Wrapper>
  )
}

export default Essan