import React from 'react'

export const Pagination = (
  {
    totalposts,
    postprepage,
    setcurrentpage,
  }) => {
  let pages = [];
  
  for (let i = 1; i <= Math.ceil(totalposts / postprepage); i++) {
    pages.push(i)
  }
  // value index
  return (
    
    <div className='mt-5' style={{marginBottom:"4px",marginLeft:"17px"}}>{
      
      pages.map((page, index) => {
        return (
          
          <span className='main-pagination' key={index}>
            
            <button className='me-2 pagination-btn btn btn-info' key={index}
              onClick={() => setcurrentpage(page)}>{page}</button>
          </span>
        )
      })
    }</div>
  )
}