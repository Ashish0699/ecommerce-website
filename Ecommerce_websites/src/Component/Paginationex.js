import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import Page from './Page.css';


function Paginationex() {

  const [postperpage] = useState(5);
  const [x, setx] = useState(1);
  const [posts, setallposts] = useState([]);
  const [pagecount1, setpagecount] = useState(0);


  const getpostdata = (data) => {

    return (

      data.map(post => <div className='container' key={post.id}>

        <p>{post.id}</p>
        <p>{post.title}</p>

      </div>)
    )
  }
const getallposts = async () => {

    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    const data = res.data;
    const slice = data.slice(x - 1, x - 1 + postperpage)
    const postdata = getpostdata(slice)

    setallposts(postdata)
    setpagecount(Math.ceil(data.length / postperpage))

  }
  useEffect(() => {
    getallposts()

  }, [x]);

  const handlepageclick = (event) => {
    const selectpage = event.selected;
    setx(selectpage + 1)

  };

  return (
    <div className="main-app">


      {posts}

      <ReactPaginate

        previouslable={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pagecount1}
        onPageChange={handlepageclick}
        containerClassName={"pagination"}
        subcontainerClassName={"pages pagination"}
        activeClassName={"active"}

      />





    </div>
  );
}



export default Paginationex



