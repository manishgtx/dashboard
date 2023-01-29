import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import ReactPaginate from 'react-paginate';
const PageBtns = ({products,page,setPage}) => {
  const handleNext = () => {
    if (page < products.length){
      setPage((page) => page+1)
    }
  }
  const handlePageClick = (data) => {
    setPage(data.selected)
  }
  return (
    
      
        <div className="btns-wrapper">
        {products.map((item,index)=> {
            return <p key={Math.random()} className={`single-btn ${page === index && `single-btn-active`}`} onClick={()=> setPage(index) }>{index+1}</p>
        })}
        <button className="next-btn" onClick={handleNext}>
            <AiOutlineArrowUp />
        </button>
        </div>
        
  )
}

export default PageBtns