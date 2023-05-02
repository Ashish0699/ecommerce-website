import React from 'react'
import Productscard from './Productscard';
// import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';

import axios from 'axios';

export default function HeadPhonepage() {
  // const [postperpagecount] = useState(4);
  // const [getvalue, setvalue] = useState(1);
  // const [countpage, setcountpage] = useState(0);
  const [getdatashow, setdatashow] = useState([]);

  // const postAlldata = (datashow) => {

  //   return (
  //     datashow.filter(data=>data.category === "handphone").map((item) => <Productscard key={item.id} {...item} />)
  //   )

  // };



  const dataset = async () => {

     const apiheadphone = await axios.get("https://6391c02ab750c8d178cc242f.mockapi.io/Reduxdata");
     const datashow = apiheadphone.data;
       setdatashow(datashow)
    //  const slice = datashow.slice(getvalue - 1, getvalue - 1 + postperpagecount);
    // const dataget = postAlldata(slice)
    // setdatashow(dataget)
    // console.log(dataget)
    //  setcountpage(Math.ceil(datashow.length +1 - postperpagecount))

  }

  useEffect(() => {

    dataset();

  }, []);   // getvalue

  // const handlepageonclick = (e) => {

  //   const selectpage = e.selected;
  //   setvalue(selectpage + 1)

  // }

  return (
    <div>
          
               
                
    <section id='home'>
   
        <div className='container'>
          <div className='home_content'>
          {/* {getdatashow} */}
            
            {getdatashow.filter(data=>data.category === "handphone").map((item) =>
            (
              <Productscard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* <ReactPaginate

previouslable={"previous"}
nextLabel={"next"}
breakLabel={"..."}
breakClassName={"break-me"}
pageCount={countpage}
onPageChange={handlepageonclick}
containerClassName={"pagination"}
subcontainerClassName={"pages pagination"}
activeClassName={"active"}

/> */}





           
      
    </div>
  )
}
