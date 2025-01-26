import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import p3 from '../assets/picThree.jpg';

const CartItems = () => {
  const {state:{cart},dispatch} = useContext(ProductContext)
  return (
    <div className='container my-5'>
      <ul style={{border:'2px solid black', padding:'20px 25px',borderRadius:'4px'}}>
        {cart.map((item)=>{
          return(
            <li key={item._id} style={{listStyle:'none',margin:'25px 10px',borderBottom:'2px solid black'}}>
              <div className='row mb-3'>
                <div className='col-md-3 '>
                  <img src={p3} alt='Picture' className='img-fluid' />
                </div>
                <div className="col-md-3">
                  <h5>Product Name: {item.title}</h5>
                </div>
                <div className="col-md-3">
                  <h5>Price: {item.price}</h5>
                </div>
                <div className="col-md-3">
                  <select value={item.quantity} onChange={(e)=>dispatch({
                    type:'UPDATE_CART',
                    payload:{iid:item._id,quantity: e.target.value}
                  })}
                  className='form-control'>
                    {[...Array(item.inStock).keys()].map((x)=>{
                      return(
                        <option key={x+1}>{x+1}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CartItems