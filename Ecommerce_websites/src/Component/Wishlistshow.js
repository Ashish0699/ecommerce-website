import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Removewichlistitem, Toglewishlist } from '../Store/Slice/Wishlist';

export default function Wishlistshow() {

    const { iswishlistopen, wichlistitems } = useSelector((state) => state.wishli);

    const dispatchwish = useDispatch();

    const wishquantity = wichlistitems.length;

    const handlewishlistcartclose = (close) => {

        dispatchwish(Toglewishlist(close));
    }

    const handlewishlistproduct = (itemid) => {
        dispatchwish(Removewichlistitem(itemid));
    }


    return (
        <>
            {
                iswishlistopen && (

                    <div className='cart_content'>
                        

                        <div className='cart_head'>
                            <h2>WishListItems <small>({wishquantity})</small></h2>
                            <div
                                title='close'
                                className='close_btn'
                                onClick={() => handlewishlistcartclose(false)}>
                                <span>&times;</span>
                            </div>
                        </div>
                        <div className='cart_body'>
                            {
                                wishquantity === 0 ? 
                                (<h2>Wishlist  is empty</h2> ) 
                                :(

                                    wichlistitems.map(item => 
                                        
                                        {

                                        const { id, img, title, price,  rating } = item;


                                        return (



                                            <div className='cart_items' key={id}>

                                                <figure className='cart_items_img'>
                                                    <img src={img} alt="product-img" />

                                                </figure>
                                                <div className='cart_items_info'>
                                                    <h4>{title}</h4>
                                                    <h3 className='price'>₹{price}</h3>
                                                    
                                                    <h3 style={{ color: "green", marginTop: "10px" }}>Rating {rating}</h3>

                                                </div>


                                                <div title='Remove_Item' className='cart_items_delete'
                                                    onClick={() => handlewishlistproduct(id)}
                                                >
                                                    <span>&times;</span>

                                                </div>
                                            </div>

                                        );

                                    })
                                )
                            }


                        </div>
                        <div className='cart_foot'>
                        

                        </div>

                    </div>







                )
            }
        </>
    )
}
