import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Payment from '../Modals/Payment'
const Cart = ({ cart, setcart }) => {

  
  const [total, settotal] = useState(0)

  const navigate = useNavigate();



  useEffect(() => {
    let totals = 0

    cart.map((value) => {
      return (totals += value.price[0])
    })
    settotal(totals)

  }, [cart])

  console.log(total)
  // const removecart = () => {
  //   // const updatedCart = cart.filter(item => item.id !== i);
  //   setcart([])
  //   settotal(0)
  //   // console.log(updatedCart)
  // }
  const removeitem = (i) => {
    const updatedCart = cart.filter(item => item.id !== i);
    setcart(updatedCart)
  }

  return (
    <div className=' cart-block' style={{ backgroundColor: 'f1f3f6' }}>
      <Payment amounts={total} />



      {cart.length === 0 ?
        <div className='col-md-8 col-12 mx-auto ' style={{height:"80vh", marginTop:'15vh' }} >
          {/* <img className=" w-100 " src="/images/EmptyCart.webp" style={{ height: "50vh" }} alt="" srcset="" /> */}
          <div className='mt-5 col-12 d-flex flex-column justify-content-center align-items-center '>
                <i class="fa-solid fa-cart-arrow-down fa-bounce fa-2xl" style={{color:'#76797f' }} ></i>
                <h2 className='mt-5 fs-3'> Your Cart Is Empty</h2>
          </div>
          
        </div>
        :
        <>
          <div className='col-md-8 col-12 m-auto mt-3  '>

            {cart.map((value, index) => {

              return (

                <div className=' mb-4 cart-b  cart-item d-flex border border-2 shadow col-md-10 col-12  py-5  bg-white' key={value.id}
                >
                  <div className='col-md-3 btn col-3 ' >

                    <img alt='' className=' img-fluid  h-100  ' src={`/images/products/${value.img}`}></img>

                  </div>
                  <div className='col-md-7 col-6 btn' onClick={() => navigate(`/card/${value.id}`)} >
                    <p className='text-start'>{value.short_des}</p>
                    <div className='d-flex align-items-center mt-2  '>
                      <p className='h6 card-title text-white py-0 px-2 bg-success bg-gradient rating '>{value.rating[0]}
                        <img className='ratingstar pb-1' src='/images/star.svg' alt='' /> </p>
                      <p className='mt-2 ms-md-2 '> {'('}{value.rating[1].toLocaleString()}{')'} Ratings</p>
                    </div>
                    <div className='d-flex gap-1 align-items-center '>
                      <p className='h5 card-title '>₹{value.price[0].toLocaleString()}</p>
                      <p className='h6 card-title text-d text-decoration-line-through  text-secondary'>{value.price[1].toLocaleString()}</p>
                      <p className='h6 card-title text-success  '>{value.price[2]}</p>
                    </div>
                    <div>

                    </div>

                  </div>
                  <div className='mt-5 ms-0  col-4'>
                    <p className='btn m-0 p-lg-3 p-1  btn-outline-danger '
                      onClick={() => removeitem(value.id)}
                    >Remove</p>
                  </div>


                </div>
              )
            })}
          </div>
          <div className='col-md-8 gap-md-3 gap-2   col-12 m-auto mt-3   d-flex '>
            <p className='h4 col-md-4 mt-2 '>Total Items= {cart.length}</p>
            <p className='h4 col-md-4 mt-2'>Total = {total.toLocaleString()}</p>

            {cart.length !== 0 &&
              <div className='col-md-3 btn rounded-0 buybutton d-flex justify-content-center   align-items-center' data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <p className=' text-center text-white h5 pt-1' >Place Order</p>
              </div>}

            {/* <div className='col-md-2 '>
          <p className='btn   m-0  m btn-danger '
            onClick={() => removecart()}
          >Clear Cart</p>
          </div> */}


          </div> 
         </>
      }

    </div>


  )
}

export default Cart