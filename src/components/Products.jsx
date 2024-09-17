import React from "react";
import '../styles/Products.css'
import jeep from "../assets/Jeep.jpg";
import plastic from "../assets/Plastic.png";
import bike from "../assets/jincheng 1.png";
import tire from "../assets/Tire.png";
import arrow from "../assets/arrow-logo.png"
const Products = () => {
  return (
    <>
      <section className="container">
        <h6 className="text-center">What We Do</h6>
        <div className="container row" id="first-row">
          <div className="col-lg-6">
            <img className="product-img1" src={jeep} alt="innoson-jeep" />
          </div>
          <div className="col-lg-6 product-note">
            <h3>Automobile Manufacturing</h3>
            <p className="notes">
              Innoson Vehicle Manufacturing [IVM] introduces automotive products
              from China, Japan and Germany. Our product line includes heavy
              duty vehicles, middle and high level buses, special environment
              friendly vehicles. The company carries out optimization design and
              assembly according to African road condition so as produce
              suitable products at affordable prices.
            </p>
            <button className="btn learn-btn">Learn More <img src={arrow} alt="" /></button>
          </div>
        </div>
        <div className=" container row" id="second-row">
          <div className="col-lg-6 product-note">
            <h3>Plastic Manufacturing</h3>
            <p className="notes">
              Innoson Technical & Industrial Co. Ltd manufactures high quality
              household and industrial plastics, health & safety accessories,
              storage containers, fixtures & fittings, electrical components &
              accessories. Plastic products manufactured include; plastic
              chairs, tables, trays, plates, spoons, cups, jerry cans of
              different sizes and many other allied products.
            </p>
            <button className="btn learn-btn">
              Learn More <img src={arrow} alt="" />
            </button>
          </div>
          <div className="col-lg-6">
            <img className="product-img2" src={plastic} alt="plastic-pic" />
          </div>
        </div>
        <div className="container row" id="third-row">
          <div className="col-lg-6 ">
            <img className="product-img1" src={bike} alt="innoson-bike" />
          </div>
          <div className="col-lg-6 product-note">
            <h3>Motorcycle Manufacturing</h3>
            <p className="notes">
            Innoson Nigeria Limited Nnewi Manufactures motorcycles, tri-cycles, spare parts and accessories. We pioneered the first Made-in-Nigeria Motorcycle brand that sold for as low as N60,000. By year 2002, we successfully drove out tokunbo (foreign used) motorcycles out of Nigeria forever.
            </p>
            <button className="btn learn-btn">Learn More <img src={arrow} alt="" /> </button>
          </div>
        </div>
        <div className="container row" id="fourth-row">
          <div className="col-lg-6 product-note">
            <h3>Tires & Tubes Manufacturing</h3>
            <p className="notes">
            General Tyres & Tubes Co. Ltd Enugu, manufacturers of high quality tyres & Tubes. The plant has a production capacity of about 8,000 pieces of motorcycle tyres daily and 13,000 tubes daily.
            </p>
            <button className="btn learn-btn">
              Learn More <img src={arrow} alt="" />
            </button>
          </div>
          <div className="col-lg-6">
            <img className="product-img2" src={tire} alt="tire-pic" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
