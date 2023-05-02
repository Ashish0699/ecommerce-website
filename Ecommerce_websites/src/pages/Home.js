import React from 'react'
import Productscard from '../Component/Productscard';
import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Pagination } from './Pagination';

export default function Home() {

  // const [postperpage] = useState(4);
  // const [x, setx] = useState(1);
  // const [pagecount1, setpagecount] = useState(0);
  const [getdata, setdata] = useState([]);
  const [currentpage, setcurrentpage] = useState(1)
  const [postprepage] = useState(4)


  // const postdata = (newrec) => {
  //   return (
  //     newrec.map((item) => <Productscard key={item.id} {...item} />)
  //   )
  // };

  const datacall = async () => {

    try {

      const apiget = await axios.get("https://6391c02ab750c8d178cc242f.mockapi.io/Reduxdata");
      const newrec = apiget.data;
      setdata(newrec)

    } catch (error) {

      alert(error);
    }



    // const slice = newrec.slice(x - 1, x - 1 + postperpage);
    // const datashow = postdata(slice)
    // setdata(datashow)
    // setpagecount(Math.ceil(newrec.length + 1 - postperpage))
  }


  useEffect(() => {
    datacall();
  }, []);

  const lastindex = currentpage * postprepage;
  const firstpage = lastindex - postprepage;
  const currentposts = getdata.slice(firstpage, lastindex);
  console.log(currentposts)

  // const handlepageclick = (e) => {

  //   const selectpage = e.selected;
  //   setx(selectpage + 1)

  // }


  return (

    <div>


      <section id='home'>
        <div className='container'>
          <div className='home_content'>
             {getdata.map((item) => (

              <Productscard getdata={currentposts} key={item.id} {...item} />
             ))}

            {/* {getdata.map((item) =>
            (
              <Productscard key={item.id} {...item} />
            ))} */}

          </div>
        </div>
      </section>
      <Pagination
        totalposts={getdata.length}
        postprepage={postprepage}
        setcurrentpage={setcurrentpage}
        currentpage={currentpage}
      />

      {/* <ReactPaginate

        previouslable={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pagecount1}
        onPageChange={handlepageclick}
        containerClassName={"pagination"}
        subcontainerClassName={"pages pagination"}
        activeClassName={"active"}

      /> */}
    </div>
  )
}
