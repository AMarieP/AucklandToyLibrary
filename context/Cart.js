import { CartContext } from "./cartContext";
import React, { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom'


export default function Cart(){
    const [cartContents, setCart] = useContext(CartContext);
    console.log(localStorage.getItem('cartContents'))
    

    //Total of cart
    function cartCostTotal(){
        let t = 0;
        cartContents.map((product) =>{
            t += product.price
            return t
        })
        return t
    }
    //useeffect here
    let total = cartCostTotal();

    //filters all contents except for the product id that is passed to delete a product from the cart arr.
    function removeFromCart(productId){
        setCart(
            cartContents.filter((t) => t.id ==! productId)
            );
    };

    //Increments or decrements product
    function incrementProduct(product, index){
            cartContents[index].quantity++
            console.log(cartContents[index].quantity)

    };

    function decrementProduct(product, index){
        if(product.quantity > 1){
            cartContents[index].quantity--
        }else{
            removeFromCart(product.id)
        }

    };

    //Total Quantity of cart
    function cartTotalQuant(){
        let t = 0;
        cartContents.map((product) =>{
            t += product.quantity
            return t
        })
        return t
    }
    
    //Shows a message saying no cart items if Cart is empty
    let cartList = cartContents.length == 0 ? emptyCartMessage : cartListings;
    
    return(
        <>
        <ul id="cartList">
            <hr className="cartHr"/>
                {cartList}
            <p id="cartTotal">Total: ${total}</p>
            <button className="button" >Enquire Now</button>
        </ul>

        </>
    )
}