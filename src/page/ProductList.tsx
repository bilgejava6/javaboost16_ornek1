import React,{useEffect, useState} from 'react'
import { IProduct } from '../model/IProduct';
function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setProducts(data.products));
  },[]);


  return (
    <div>ProductList</div>
  )
}

export default ProductList