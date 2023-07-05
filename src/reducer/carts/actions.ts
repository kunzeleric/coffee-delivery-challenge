import { Item } from "./reducer"

export enum ActionTypes {
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
    UPDATE_CART_ITEM_QTY = 'UPDATE_CART_ITEM_QTY',
    CLEAR_CART = 'CLEAR_CART'
}

export function addItemToCartAction(item: Item) {
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload: {
            newItem: item,
        }
    }
}

export function removeItemFromCartAction(itemId: number) {
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        payload: {
            itemId
        }
    }
}

export function updateCartItemQuantityAction(itemId: number, itemQty: number) {
    return {
        type: ActionTypes.UPDATE_CART_ITEM_QTY,
        payload: {
            itemId,
            itemQty
        }
    }
}

export function clearCartAction () {
    return {
        type: ActionTypes.CLEAR_CART,
    }
}