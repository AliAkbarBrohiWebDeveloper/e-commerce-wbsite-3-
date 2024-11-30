

"use client"

import { Menu } from "lucide-react"
import { useState } from "react"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Header = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,   
    });
  }, []);


  const [isopen,setIsOpen]=useState(false)
    const ToggleMenu=()=>{
setIsOpen(!isopen)

    }





  return (

    

<div className="  p-6 rounded-md  " >

<ul className="   justify-between items-center hidden md:flex  bg-indigo-400 h-14 text-white px-6">

    <li>Groceries</li>
    <li>Premium Fruits</li>
    <li>Home & Kitchen</li>
    <li>Fashion</li>
    <li>Electronics</li>
    <li>Home Impowerment</li>
    <li>Sports,Toys,lugage</li>
</ul>



<Menu className="md:hidden text-5xl" onClick={ToggleMenu}/>

{isopen && (

    <div className=" absolute  bg-indigo-500 text-white top-12 right-0 p-6 rounded-lg shadow-lg h-auto w-80 text-center  ">
 
        <ul className="space-y-9">

        <li>Groceries</li>
    <li>Premium Fruits</li>
    <li>Home & Kitchen</li>
    <li>Fashion</li>
    <li>Electronics</li>
    <li>Home Impowerment</li>
    <li>Sports,Toys,lugage</li>

        </ul>



    </div>
)


}
</div>

  
)}

export default Header