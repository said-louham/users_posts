import React from 'react'
const Product =({productInfo})=>{
    return (
        <>
        <div className='product'>
              <h4>{productInfo.title}</h4>
              <p>{productInfo.body}</p>
        </div>
        </>
    )
}
export default Product;