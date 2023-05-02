import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementitem, incrementitem, removeitem, toggleCart } from '../Store/Slice/Cartslice';


export default function Cart() {

  const { isCartopen, CartItems } = useSelector((state) => state.cart);


  const Dispatch = useDispatch();

  const handleclosecart = (close) => {

    Dispatch(toggleCart(close))
  }

  const handleremoveitem = (itemid) => {

    Dispatch(removeitem(itemid))
  }
  const handleincrementitem = (itemid) => {


    Dispatch(incrementitem(itemid))
  }
  const handledecrementitem = (itemid) => {

    Dispatch(decrementitem(itemid))
  }

  const cartquantity = CartItems.length;


  const carttotal = CartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0)


  return (
    <>
      {

        isCartopen && (

          <div className='cart_content'>

            <div className='cart_head'>
              <h2>cart <small>{cartquantity}</small></h2>
              <div
                title='close'
                className='close_btn'
                onClick={() => handleclosecart(false)}
              >
                <span>&times;</span>
              </div>
            </div>

            <div className='cart_body'>

              {
                cartquantity === 0 ? (

                  <h2>cart is empty</h2>


                ) : (


                  CartItems.map(item => {

                    const { id, img, title, price, quantity } = item;
                    const itemTotal = price * quantity;

                    return (

                      <div className='cart_items' key={id}>

                        <figure className='cart_items_img'>
                          <img src={img} alt="product-img" />

                        </figure>
                        <div className='cart_items_info'>
                          <h4>{title}</h4>
                          <h3 className='price'>₹{itemTotal.toLocaleString()}</h3>

                        </div>
                        <div className='cart_items_quantity'>
                          <span onClick={() => handledecrementitem(id)}>&#8722;</span>
                          <b>{quantity}</b>
                          <span onClick={() => handleincrementitem(id)}>&#43;</span>

                        </div>

                        <div title='Remove_Item' className='cart_items_delete'
                          onClick={() => handleremoveitem(id)}>
                          <span>&times;</span>

                        </div>
                      </div>


                    );

                  })


                )

              }

            </div>

            <div className='cart_foot'>

              <h3>
                <small>Total:</small>
                <b>₹ {carttotal.toLocaleString()}</b>
              </h3>
              <button type='button' className='checkout_btn' disabled={cartquantity === 0}>
                Checkout
              </button>
            </div>

          </div>

        )
      }

    </>
  )
}
