import { Minus, Plus, Trash } from "@phosphor-icons/react"


export const CartProduct = () => {
    return (
        <div className="flex items-center gap-6 pb-6 border-b-[1px] border-base-hover">
            <img src="./expresso.png" alt="" />
            <div className="flex flex-col gap-2">
                <p className="text-base-subtitle">Café Expresso</p>
                <div className="flex gap-4">
                    <div className="flex gap-2 bg-base-button items-center px-2 py-2 rounded-md">
                        <span className="text-purple text-md hover:text-purple-dark cursor-pointer">
                            <Minus />
                        </span>
                        <p>1</p>
                        <span className="text-purple text-md hover:text-purple-dark cursor-pointer">
                            <Plus />
                        </span>
                    </div>
                    <div className="flex items-center gap-2 bg-base-button px-2 py-2 rounded-md cursor-pointer hover:bg-base-hover">
                        <span className="text-purple text-md">
                            <Trash size={18} />
                        </span>
                        <p className="uppercase text-base-text text-sm">Remover</p>
                    </div>
                </div>
            </div>
            <span className="text-base-text transform -translate-y-6 font-bold">R$ 9,90</span>
        </div>
    )
}
