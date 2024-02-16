import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PageNotFound from "../pages/PageNotFound"

export default function Product({ user }) {
  // const params = useParams()
  // console.log(params)

  const { productId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch(err => console.error(err))
  }, [productId])

  if (!product) {
    return <>
      <PageNotFound></PageNotFound>
    </>
  }

  return (
    <>
      <div className="mt-5">
        <div className="row g-0 p-3">
          <div className="col-md-4">
            <img src={product.image} alt="" className="w-100" />
          </div>
          <div className="col-md-8 p-3">
            <div className="card-body">
              <h2 className="card-title mb-5">{product.title}</h2>
              <p className="card-text">{product.description}</p>
              <h4 className="card-text">{product.price} $</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}