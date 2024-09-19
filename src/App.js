import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [product, setProduct] = useState({})

  useEffect(() => {
    loadProduct()
  }, [])

  async function loadProduct() {
    let res = await fetch('http://localhost:2000/api/product')
    let resJson = await res.json()
    setProduct(resJson)
  }

  async function onChange(e) {
    let newProduct = { ...product }
    newProduct.name = e.target.value
    setProduct(newProduct)

  }

  return (

    <div>

      {/*HEADER*/}
      <div className="product" >
        <input
          className="h1"
          value={product.name}
          onChange={(e) => {
            onChange(e)
          }}
        />
      </div>

      {/*IMAGE*/}
      <div>
        <img className="imgs" src={product.image} />
        Картинку можно поменять тут :
        <input className="product"
          value={product.image}
          onChange={(e) => {
            onChange(e)
          }}
        />
      </div>
<br></br>
      {/* INGREDIENTS */}
      <div className="product">{
        product.ingreS?.map((ingredient, index) => {
          return (<div>{ingredient}</div>)
        }
        )}
      </div>
      <br></br>

      {/*DESCRIPTION*/}
      <div className="product">
        {product.description}
        
        <input 
        className="product"
          value={product.description}
          onChange={(e) => {
            onChange(e)
          }}
        />
      </div>
    </div>
  );
}

export default App;
