import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

//Context for cart so value is shared across entire app
const CartContext = createContext([{}, () => {}]);

const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
        console.log("Error")
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('cartContents')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log("Error")
    }
  }
  
  
const CartProvider = (props) => {
    const [cartContents, setCart] = useState([]);
    const [total, setTotal] = useState(0)
    
 //If there is data in cart contents it will get it and set it
    useEffect(() => {
        cartItemsData = getData()
        if (!cartItemsData) setCart(cartItemsData)
        console.log(cartItemsData)
    }, [])
        
//Whenever cart contents updates set cart
    useEffect(() => {
        storeData('cartContents')
        console.log(typeof cartContents)
        console.log(AsyncStorage.getItem('cartContents') + "Cart Contents")
    }, [cartContents])

    function addQuantityValue(product){
        product.quantity = 1
    };
    
    function incrementQuant(product, add){
        if(add == true){
            product.quantity++
            console.log(product.quantity)
        }else{
            product.quantity--
            console.log(product.quantity)
            cartContents.pop(product)
        }
    };

    function checkIfProductExists(product){
        for(let i = 0; i < cartContents.length; i++){
            if(cartContents[i].id == product.id){
                console.log("YesExist")

                return true
            }else{
                console.log("NoExist")

                return false;
            }
        }
    }

    function updateCart(product){
        let exists = checkIfProductExists(product)
        if(exists == true){
            product.quantity++
            cartCostTotal(cartContents)
        }else{
            addQuantityValue(product);
            cartContents.push(product)
            cartCostTotal(cartContents)
            }
        }
    
    function cartCostTotal(cartContents){
        let t = 0;
        cartContents.map((product) =>{
            t += (product.price * product.quantity)
            console.log(total)
            setTotal(t)
        })
    }
        
    useEffect(() =>{
        cartCostTotal(cartContents)

    }, [cartContents])

    return (
        <CartContext.Provider value={[updateCart, cartContents, incrementQuant, total]}>
            {props.children}
        </CartContext.Provider>
    );
  }

export { CartContext, CartProvider };
