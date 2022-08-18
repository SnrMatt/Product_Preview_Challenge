import "./App.css";

function App() {
  return (
    <div className="main_background">
      <div className="mobile_product_card">
        <img src="/images/image-product-mobile.jpg" />
        <div className="mobile_product_info">
          <p style={{ fontSize: "13px" }}>P E R F U M E</p>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptous interpretation composed by Oliver
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="mobile_product_price">
            <h1>$149.99</h1>
            <span>$169.99</span>
          </div>
        </div>
        <button className="mobile_cart_button">
          <img src="/images/icon-cart.svg" /> Add to Cart
        </button>
      </div>
      <div className="product_card">
        <img src="/images/image-product-desktop.jpg" />
        <div className="product_info_wrapper">
          <div className="product_info">
            <p style={{ fontSize: "13px", paddingTop: "20px" }}>
              P E R F U M E
            </p>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p>
              A floral, solar and voluptous interpretation composed by Oliver
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="mobile_product_price">
              <h1>$149.99</h1>
              <span>$169.99</span>
            </div>
            <button className="cart_button">
              <img src="/images/icon-cart.svg" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
