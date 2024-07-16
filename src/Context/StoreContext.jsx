import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";

export const StoreContext = createContext(null);    //implementing global state to store functions and sending them to nested components

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});   //declaring cart as state object

    const addToCart = (itemId) => {             //function to add new items in cart object
        if (!cartItems[itemId]) {
            setCartItems(prev => { return { ...prev, [itemId]: 1 } });
        } else {
            setCartItems(prev => { return { ...prev, [itemId]: prev[itemId] + 1 } });
        }
    };

    const removeFromCart = (itemId) => {        //function to remove items from cart object
        setCartItems(prev => { return { ...prev, [itemId]: prev[itemId] - 1 } });
    }

    const getTotal = ()=>{                      //function to calculate total value of items in cart object     
        let total = 0;

       for(const item in cartItems){
        if(cartItems[item] > 0){
            let itemInfo = food_list.find((product)=> product._id === item);
             total += itemInfo.price * cartItems[item];
        }
       }
       return total;   
    }


    const contextValue = {                     //collecting all the functions as passing it as a prop 
        food_list, addToCart, removeFromCart, cartItems, getTotal
    }

    return (                    
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;