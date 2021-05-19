import React, {useState, useEffect} from "react";

import { getProducts } from "./helper/coreapicalls";

import Base from "./Base";


import "../styles.css"
import Card from "./Card";
import Footer from "./Footer";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);


  return (
    <React.Fragment>
    <div>
    <Base/>
    <div>
    <div class="content-top">
        <div class="container ">
          <div class="spec">
            <h3>Products</h3>
            <div class="ser-t">
              <b />
              <span>
                <i />
              </span>
              <b class="line" />
            </div>
          </div>
          <div class="tab-head">
      <div className="row">
        {products.map( (product, index) => {
          return (
          <div key={index} className="col-3 mb-3">
            <Card product={product}/>
          </div>
          );
        })}
      </div>
    </div>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
    </React.Fragment>
  );
}