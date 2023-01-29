import React, { useState,useEffect } from 'react'
import Features from './Features'
import Table from './Table'
import axios from 'axios'
import pagination from '../../utils'
import PageBtns from './PageBtns'
const List = () => {
  const [allProducts, setAllProducts] = useState([])
  const [products,setProducts] = useState([]);
  const [page,setPage] = useState(0);
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  
  useEffect(() => {
    axios.get('https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=118')
    .then(
      (res) => {setProducts(pagination(res.data.data.data));
        setAllProducts(res.data.data.data)
        setLoading(false)
      }
      )
      
    },[])
  useEffect(() => {
    if (loading) return
    setData(products[page])
},[loading,products,page])
console.log(products)
console.log(data)
  return (
    <div className='list'>
      <Features allProducts={allProducts} setAllProducts={setAllProducts} products={products} setProducts={setProducts} setPage={setPage}/>
      <Table data={data}/>
      {products.length > 1 && <PageBtns products={products} page={page} setPage={setPage}/>}
    </div>
  )
}

export default List