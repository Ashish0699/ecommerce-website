import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../Store/Slice/Cartslice';
import { Toglewishlist } from '../Store/Slice/Wishlist';
import { Link } from 'react-router-dom'

export default function Header() {

  const { CartItems } = useSelector((state) => state.cart)
  const { wichlistitems } = useSelector((state) => state.wishli)



  const dispatch = useDispatch();
  const dispatchwish = useDispatch();

  const handleOpenCart = (open) => {

    dispatch(toggleCart(open));
  }

  const cartQuantity = CartItems.length;

  const handlewishlist = (open) => {

    dispatchwish(Toglewishlist(open));

  }
  const wishlistitem = wichlistitems.length;

  return (
    <div>
      <>
        <header id="header">
          <div className="container">
            <div className="navbar">
            <div className="header1">
             <Link to="/">Home</Link> 

                
             
  
      <div className="header-right">
    <Link to="/SmartWatchpage" >SmartWatch</Link>
    <Link to="/HeadPhonepage">HeadPhone</Link>
    {/* <Link to="#Amoled Series">Amoled Series</Link> */}
  </div>
</div>



              <div className="nav_menu">

                <div title="Cart" className="cart_icon">
                  <span className="badge" style={{ marginRight: "-47px" }}>{wishlistitem}</span>
                  <img src="/images/icon48.png" alt="bag-icon" style={{ marginRight: "37px", height: "24px", width: "30px" }}
                    onClick={() => handlewishlist(true)} />

                  <img src="/images/bag-icon.svg" alt="bag-icon"
                    onClick={() => handleOpenCart(true)} />
                    <span className="badge">{cartQuantity}</span>
                  {/* <img src="/images/login.png" alt="bag-icon" style={{ marginRight: "-13px",marginLeft: "7px", height: "24px", width: "30px" }} */}
                    {/* /> */}
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    </div>
  )
}
