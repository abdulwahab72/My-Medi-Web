"use client";
// this is globle store  with custom hook
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// context created
const Context = createContext();

// creating provider

export const Provider = ({ children }) => {
  // This is used to set the quntitiy
  const [cartTotalQty, setCartTotalQty] = useState(0);
  // this state will have all the products which are In Cart
  const [cartProducts, setCartProducts] = useState(null);
  // this state will be used to contain the total amout of products
  const [cartTotalAmount, setTotalAmount] = useState(0);

  // (FUNCTIONS)

  // CART------------------------------------------------------------------| Cart------------------------------------------------------

  // getting and setting the localstorage cart products to cartProducts

  useEffect(() => {
    // facthcing data from localStroge and saving it in a variable
    const cartItems = localStorage.getItem("eShopCartItems");
    // saving fached data in json form in a new variable
    const local_Cart_Products = JSON.parse(cartItems);
    setCartProducts(local_Cart_Products);
  }, []);
  // this function is used to add products in Cart

  const handleAddProductToCart = useCallback((product) => {
    setCartProducts((pre) => {
      // prev mean if prev value exist in product than
      let updatedCart;

      if (pre) {
        updatedCart = [...pre, product];
      } else {
        updatedCart = [product];
      }
      localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));

      return updatedCart;
    });
  }, []);

  // This function is used to remove product quntity

  const handleRemoveProduct = useCallback(
    (product) => {
      if (cartProducts) {
        const filterProduct = cartProducts.filter((item) => {
          return item.id !== product.id;
        });

        setCartProducts(filterProduct);
        localStorage.setItem("eShopCartItems", JSON.stringify(filterProduct));
      }
    },
    [cartProducts]
  );

  //----------------------------Quntity For Cart ------------------------------------------------------------------//

  // quntity incress for Cart Page

  const handleCartQtyIncrease = useCallback(
    (product) => {
      let updatedCart;

      // here we are setting a maximum number for product quntity that user can add
      if (product.quantity === 99) {
        return alert("quantity must be less than 100");
      }

      if (cartProducts) {
        updatedCart = [...cartProducts];

        // for finding the index of the updatedCart to update its quntity

        let existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        // updating cart quntity on the basis of existing index
        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = ++updatedCart[existingIndex]
            .quantity;
        }

        // setting CartProduct To UpdatedCart

        setCartProducts(updatedCart);
        localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  // Quantity Decress For Cart Page

  const handleCartQtyDecrease = useCallback(
    (product) => {
      let updatedCart;
      // find index arry methord
      if (product.quantity === 1) {
        return alert("quantity must not  be less than 1 ");
      }

      if (cartProducts) {
        updatedCart = [...cartProducts];

        let existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = --updatedCart[existingIndex]
            .quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  // Clear Cart used for clear whole data
  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);
    localStorage.setItem("eShopCartItems", JSON.stringify(null));
    alert("Your Cart Has Been Clear");
  }, [cartProducts]);

  // for getting total amout and quantity
  useEffect(() => {
    const getTotals = () => {
      if (cartProducts) {
        const { total, qty } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;

            acc.total = acc.total + itemTotal;
            acc.qty = acc.qty + item.quantity;

            return acc;
          },

          {
            total: 0,
            qty: 0,
          }
        );
        setCartTotalQty(qty);
        setTotalAmount(total);
      }
    };

    getTotals();
  }, [cartProducts]);

  console.log(
    "total_Quntity----------------------------------------->",
    cartTotalQty
  );
  console.log(
    "total_Amount------------------------------------------>",
    cartTotalAmount
  );
  // end  Total Amonut

  //-----------------------------------------------------------Provider----------------------------------//
  return (
    <Context.Provider
      value={{
        cartTotalQty,
        setCartTotalQty,
        handleAddProductToCart,
        cartProducts, // this state will have all the products which are In Cart
        setCartProducts,
        cartTotalAmount,
        setTotalAmount,
        handleRemoveProduct,
        handleCartQtyIncrease,
        handleClearCart,
        handleCartQtyDecrease,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// this is a custom hook from where we will access the data
export const useCart = () => {
  const MyContext = useContext(Context);
  if (MyContext === null) {
    throw new Error("useCart must be used within a CardContextProvider");
  }

  return MyContext;
};
