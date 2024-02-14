import { useEffect, useState } from "react"
import { ProductCard } from "../products"

export default function Products() {

  const [last10Products, setLast10Products] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(res => res.json())
      .then(json => setLast10Products(json))
  }, [])

  return (
    <>
      <div className="card-header text-center">
        <h1>Products</h1>
      </div>
      <div className="row row-cols-sm-3 row-cols-md-5">
        {last10Products.map(item => <ProductCard key={item.id} item={item} />)}
      </div>
    </>
  )
}