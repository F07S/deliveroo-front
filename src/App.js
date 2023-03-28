import "./App.css";
import "../src/css/fonts.css";
import axios from "axios";
import { useState, useEffect } from "react";

// POP-UP NOTIFICATIONS PACKAGE
//################################################################################################
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// COMPONENTS
//################################################################################################
import Category from "./components/Category";
import Cart from "./components/Cart";
import CartTotal from "./components/CartTotal";

// FONT-AWESOME
//################################################################################################
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  // DATA USESTATES
  //################################################################################################
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);

  // CART USESTATE
  //################################################################################################
  const [cart, setCart] = useState([]);

  // CART MANAGEMENT
  //################################################################################################
  const deliveryFees = 2.5;
  let subTotal = 0;

  cart.forEach((cartItem) => {
    subTotal += cartItem.price * cartItem.quantity;
  });

  const total = subTotal + deliveryFees;

  const addItem = (item) => {
    const newCart = [...cart];
    const exist = newCart.find((elem) => elem.id === item.id);
    if (exist) {
      exist.quantity++;
      setCart(newCart);
    } else {
      newCart.push({ ...item, quantity: 1 });
      setCart(newCart);
    }
  };

  const removeItem = (item) => {
    const newCart = [...cart];
    const exist = newCart.find((elem) => elem.id === item.id);
    if (exist.quantity === 1) {
      const index = newCart.indexOf(exist);
      newCart.splice(index, 1);
    } else {
      exist.quantity--;
    }
    setCart(newCart);
  };
  // DATA RETRIEVAL useEffect
  //################################################################################################
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo--phfc9s47kbj5.code.run/"
        );

        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header>
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/f/f7/Deliveroo_logo.svg/519px-Deliveroo_logo.svg.png?20160907124820"
          alt=""
        />
      </header>
      {isloading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <div className="description">
            <div className="desc-text">
              <div>{data.restaurant.name}</div>
              <p>{data.restaurant.description}</p>
            </div>
            <img src={data.restaurant.picture} alt="" />
          </div>
          <main className="main">
            <div className="category">
              <div className="left-side">
                {data.categories.map((elem, index) => {
                  if (elem.meals.length !== 0) {
                    return (
                      <Category
                        elem={elem}
                        index={index}
                        addItem={addItem}
                      ></Category>
                    );
                  } else return null;
                })}
              </div>
              <div className="right-side">
                <div className="panier">
                  {subTotal === 0 ? (
                    <p>Votre panier est vide</p>
                  ) : (
                    <div>
                      <button className="validate-btn">
                        Valider mon panier
                      </button>
                      {cart.map((cartItem) => {
                        return (
                          <Cart
                            cartItem={cartItem}
                            removeItem={removeItem}
                            addItem={addItem}
                          ></Cart>
                        );
                      })}
                    </div>
                  )}
                  <CartTotal
                    subTotal={subTotal}
                    deliveryFees={deliveryFees}
                    total={total}
                  ></CartTotal>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}

      {/* NOTIFICATIONS COMPONENT FROM REACT TOASTIFY PACKAGE */}
      <ToastContainer
        className="toast"
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <footer></footer>
    </div>
  );
}

export default App;
