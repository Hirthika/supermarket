import React, {useState, useEffect} from "react";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import PaymentB from "./PaymentB";
import { Link } from "react-router-dom";

const Cart = () => {
  const [reload, setReload] = useState(false)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(loadCart());
}, [reload]);



const loadCheckout = () => {
    return (
        <div>
            <h1>Checkout</h1>
        </div>
    );
};

    return (
      <div>
         <Base />
         <div class="container ">
         <div class="banner-top">
        <div class="container">
         <h3 >My Cart</h3>
         <h4><Link to="/">Home</Link><label>/</label>Cart</h4>
         <div class="clearfix"> </div>
         </div>
        </div>
          <div class="tab-head">
          <div className="row"> 
          {products.map( (product, index) => {
          return (
          <div key={index} className="col-3 mb-3">
            <Card
          key={index}
          product={product}
          removeFromCart={true}
          addtoCart={false}
          reload={reload}
          setReload={setReload}
        />
          </div>
          );
        })}
            </div>
            <div className="col-8">
              {products.length > 0 ? 
              (
                <PaymentB products={products} setReload={setReload} />
              ) :
              (
                <h3> Add something in cart</h3>
              )}
            </div>
        </div>
      </div>
      </div>
    );
};

export default Cart;