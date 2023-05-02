import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../Store/Slice/Cartslice';
import { addwishlistitem } from '../Store/Slice/Wishlist';




export default function Productscard(props) {

  const { img, rating, title, price ,oprice} = props;
  const [isAdded, setisAdded] = useState(false);
  const [isAddedToWishList, addToWishList] = useState(false);

  const dispatch = useDispatch();
  const dispatchwishilist = useDispatch();

  const handleaddtocart = () => {

    const item = { ...props };

    dispatch(addItem(item));
   
    setisAdded(true)

    setTimeout(() => {
      setisAdded(false)

    }, 3000);
  }


  const handlewishilist = () => {

    const item = {...props};

  dispatchwishilist(addwishlistitem(item))
 

    addToWishList(!isAddedToWishList)

    // setTimeout(() => {
    //   addToWishList(false)
    // }, 2000);

  }


  return (

    <div>


      <div className='product_card'>
        
        <button onClick={handlewishilist}>
        <img src={isAddedToWishList ? "/images/icons8-heart-suit-48.png":"/images/wishlist-1.png"} 
        alt="bag-icon"style={{ marginRight: "-256px", marginTop: "-17px", height: "24px", width: "19px" }} />
       </button>


        <figure>
          <img src={img} alt="item-img" />
        </figure>
        <strong className='rating'>{rating}</strong>
        <h4 className='title'>{title}</h4>
        <h3 className='price'>₹{price}</h3>
        <h3 className='price'><del>₹{oprice}</del></h3>
        
        <button type='button'
          className={`btn ${isAdded ? "added" : ""}`}
          onClick={handleaddtocart}>
          {isAdded ? "added" :  "Add To Cart"}
        </button>
      </div>
     

    </div>


  )
}
