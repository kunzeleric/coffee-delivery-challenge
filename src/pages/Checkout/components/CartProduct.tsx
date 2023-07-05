import { Minus, Plus, Trash } from "@phosphor-icons/react"
import { CartContext } from "../../../context/CartContext"
import { useContext } from "react";
import { Item } from "../../../reducer/carts/reducer";

interface CartProductProps {
    item: Item
}

export const CartProduct = ({ item }: CartProductProps) => {
    const { removeItemFromCart, updateCartItemQuantity, cartItems } = useContext(CartContext)

    const handleAddCoffee = () => {
        updateCartItemQuantity(item.id, item.qtd + 1)
    }

    const handleReduceCoffee = () => {
        if (item.qtd > 1) {
            updateCartItemQuantity(item.id, item.qtd - 1)
        }
    }

    const handleRemove = () => {
        removeItemFromCart(item.id);
    }

    const coffeeQuantity = cartItems.reduce((total, item) => total + item.qtd, 0);

    return (
        <div className="flex items-center gap-6 pb-6 border-b-[1px] border-base-hover">
            <img src={item.img} alt="" />
            <div className="flex flex-col gap-2">
                <p className="text-base-subtitle">{item.nome}</p>
                <div className="flex gap-4">
                    <div className="flex gap-2 bg-base-button items-center px-2 py-2 rounded-md">
                        <span onClick={handleReduceCoffee} className="text-purple text-md hover:text-purple-dark cursor-pointer">
                            <Minus />
                        </span>
                        <p>{coffeeQuantity}</p>
                        <span onClick={handleAddCoffee} className="text-purple text-md hover:text-purple-dark cursor-pointer">
                            <Plus />
                        </span>
                    </div>
                    <div onClick={handleRemove} className="flex items-center gap-2 bg-base-button px-2 py-2 rounded-md cursor-pointer hover:bg-base-hover">
                        <span className="text-purple text-md">
                            <Trash size={18} />
                        </span>
                        <p className="uppercase text-base-text text-sm">Remover</p>
                    </div>
                </div>
            </div>
            <span className="text-base-text transform -translate-y-6 font-bold">R$ {(item.qtd*item.preco).toFixed(2)}</span>
        </div>
    )
}
