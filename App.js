import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return (
    <div className="heading">
      <div className="img-div">
        <img
          src="https://cdn3.vectorstock.com/i/1000x1000/50/07/food-delivery-online-vector-26745007.jpg"
          className="app-logo"
        />
      </div>
      <div className="menu-div">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

function RestaurantCard(props) {
  return (
    <div className="res-card">
      <a href="https://www.google.com" className="res-anchor">
        <div style={{ display: "grid", gap: 12 }}>
          <div className="res-img-container">
            <img
              className="res-logo"
              src="https://www.fabhotels.com/blog/wp-content/uploads/2022/07/1400x600-Food-Banner.jpg"
            />
          </div>
          <div className="res-text-container">
            <div className="res-name">{props.resName}</div>
            <div className="res-card-subtext-container">{props.resTime}</div>
            <div className="res-card-description-container">
              <div className="sc-beySbM iTWFZi">
                {props.resCuisine}
              </div>
              <div className="sc-beySbM iTWFZi">{props.resLocation}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  ); 
}

function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-cards">
        <RestaurantCard resName="Alisha's Bawarchi Biryani - 2" resCuisine = "Biryani, South Indian, Indian, Chinese" resLocation = "Somavaram" resTime = "20-25mins" />
        <RestaurantCard />
      </div>
    </div>
  );
}

function Footer() {}


function AppLayout() {
  console.log("renedering")
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

// now we need to render this heading into the root dom
var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(AppLayout());
