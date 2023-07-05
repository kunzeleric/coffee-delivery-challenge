import { useState, createContext, ReactNode, useEffect, useReducer } from 'react'
import { Item, cartReducer } from '../reducer/carts/reducer'
import { addItemToCartAction, removeItemFromCartAction, updateCartItemQuantityAction } from '../reducer/carts/actions'


interface CartContextProps {
    cartItems: Item[],
    totalToPay: number,
    deliveryCost: number,
    addItemToCart: (item: Item) => void,
    removeItemFromCart: (itemId: number) => void,
    updateCartItemQuantity: (itemId: number, itemQty: number) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cartItemsState, dispatch] = useReducer(cartReducer, { cartItems: [] });

    const [totalToPay, setTotalToPay] = useState(0);
    const [deliveryCost, setDeliveryCost] = useState(0);

    const { cartItems } = cartItemsState;

    const addItemToCart = (item: Item) => {
        dispatch(addItemToCartAction(item))
    }

    const removeItemFromCart = (itemId: number) => {
        dispatch(removeItemFromCartAction(itemId))
    }

    const updateCartItemQuantity = (itemId: number, itemQty: number) => {
        dispatch(updateCartItemQuantityAction(itemId, itemQty))
    };

    const calculateTotalDue = (items: Item[]) => {
        setTotalToPay(items.reduce((total, item) => total + (item.qtd * item.preco), 0));
    }

    const calculateFreight = (items: Item[]) => {
        const totalItems = items.reduce((total, item) => total + (item.qtd), 0);

        if (totalItems > 3 && totalItems <= 6) {
            setDeliveryCost(5)
        } else if (totalItems > 6) {
            setDeliveryCost(10)
        } else if (totalItems > 0) {
            setDeliveryCost(3.50)
        } else {
            setDeliveryCost(0)
        }
    }

    useEffect(() => {
        calculateTotalDue(cartItems);
        calculateFreight(cartItems);
    }, [cartItems])

    return (
        <CartContext.Provider
            value={{
                addItemToCart,
                removeItemFromCart,
                updateCartItemQuantity,
                cartItems,
                deliveryCost,
                totalToPay
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
