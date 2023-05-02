import React from 'react'
import Productscard from './Productscard';
import ReactPaginate from 'react-paginate';
import {useState,useEffect} from 'react';
import axios from 'axios';
// import { Pagination } from './../pages/Pagination';



export default function SmartWatchpage() {

 const [getapi, setapi] = useState([]);

  const Alldatashow = async()=> {

     const apicall = await axios.get("https://6391c02ab750c8d178cc242f.mockapi.io/Reduxdata");
    //  console.log(apicall.data);
        setapi(apicall.data)
    }

     useEffect(() => {
    
      Alldatashow();
   
       }, []);
  
 return (
    <div>
      
      

<section id='home'>
   
   <div className='container'>
     <div className='home_content'>

          
        {getapi.filter(data=>data.category === "smartwatch").map((item) =>
       (
         <Productscard key={item.id} {...item} />
       ))} 
     </div>
   </div>
 </section>
 {/* <Pagination/> */}
 
 {/* <ReactPaginate

previouslable={"previous"}
nextLabel={"next"}
breakLabel={"..."}
breakClassName={"break-me"}
pageCount={"pagecount1"}
onPageChange={"handlepageclick"}
containerClassName={"pagination"}
subcontainerClassName={"pages pagination"}
activeClassName={"active"}

/> */}
      
    </div>
  )
}
