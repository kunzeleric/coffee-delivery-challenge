import { useState, createContext, ReactNode, useEffect } from 'react'

export interface Item {
    id: number,
    nome: string,
    img: string,
    qtd: number,
    preco: number
}

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
    const [cartItems, setCartItems] = useState<Item[]>([]);
    const [totalToPay, setTotalToPay] = useState(0);
    const [deliveryCost, setDeliveryCost] = useState(0);

    const addItemToCart = (item: Item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    }

    const removeItemFromCart = (itemId: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }

    const calculateTotalDue = (items: Item[]) => {
        setTotalToPay(items.reduce((total, item) => total + (item.qtd * item.preco), 0));
    }

    const updateCartItemQuantity = (itemId: number, itemQty: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, qtd: itemQty } : item
            )
        );
    };

    const calculateFreight = (items: Item[]) => {
        const totalItems = items.reduce((total, item) => total + (item.preco), 0);

        if (totalItems > 3 && totalItems <= 6) {
            setDeliveryCost(5)
        } else if (totalItems > 6) {
            setDeliveryCost(10)
        } else if (totalItems > 0){
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
