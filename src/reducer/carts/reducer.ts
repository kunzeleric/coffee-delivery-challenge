import { ActionTypes } from "./actions";

export interface Item {
    id: number,
    nome: string,
    img: string,
    qtd: number,
    preco: number
}

interface CartItemsState {
    cartItems: Item[]
}

export function cartReducer(state: CartItemsState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload.newItem]
            }

        case ActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.itemId),
            }

        case ActionTypes.UPDATE_CART_ITEM_QTY:
            const { itemId, itemQty } = action.payload;
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item.id === itemId) {
                        return {
                            ...item,
                            qtd: itemQty
                        }
                    }
                    return item
                })
            }

        case ActionTypes.CLEAR_CART:
                return {
                    ...state,
                    cartItems: []
                }

        default:
            return state
    }
}