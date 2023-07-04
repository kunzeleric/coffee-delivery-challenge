import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { Cafe } from '../../../mock/coffees'
import { useContext, useState } from 'react'
import { CartContext, Item } from '../../../context/CartContext'
interface ProductCardProps {
  cafeInfo: Cafe
}

export const ProductCard = ({ cafeInfo }: ProductCardProps) => {

  const { addItemToCart } = useContext(CartContext);
  const [coffeeQuantity, setCoffeeQuantity] = useState(0);

  const handleAdd = () => {
    setCoffeeQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleRemove = () => {
    if (coffeeQuantity === 0) {
      setCoffeeQuantity(0);
    }
    setCoffeeQuantity((prevQuantity) => prevQuantity - 1)
  }

  const addToCart = () => {
    const item: Item = {
      id: cafeInfo.id,
      nome: cafeInfo.nome,
      img: cafeInfo.imgPath,
      qtd: coffeeQuantity,
      preco: 9.90
    }

    addItemToCart(item);
  }

  return (
    <div className="flex flex-col items-center bg-base-card rounded-tl-md rounded-br-md rounded-tr-4xl rounded-bl-4xl w-64">
      <img src={cafeInfo.imgPath} alt="" className="w-32 transform -translate-y-[15%]" />
      <div className="flex gap-1 pb-4">
        {
          cafeInfo.tipo.map((tipoCafe) => {
            return (
              <span className="text-center uppercase flex bg-yellow-light px-2 py-1 rounded-full text-[10px] font-bold text-yellow-dark" key={tipoCafe}>
                {tipoCafe}
              </span>)
          })
        }
      </div>
      <div className="flex flex-col items-center gap">
        <h3 className="text-xl font-bold font-alt text-base-subtitle">{cafeInfo.nome}</h3>
        <p className="text-sm text-base-label px-5 py-2 text-center">{cafeInfo.descricao}</p>
      </div>
      <div className="flex w-full gap-2 justify-around px-6 py-5">
        <div className="flex items-center gap-1">
          <p className="text-base-text text-sm">R$</p>
          <p className="text-base-text font-alt text-2xl font-bold">9,90</p>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2 bg-base-button items-center px-2 py-2 rounded-md">
            <span onClick={handleRemove} className="text-purple text-md hover:text-purple-dark cursor-pointer">
              <Minus />
            </span>
            <p>{coffeeQuantity}</p>
            <span onClick={handleAdd} className="text-purple text-md hover:text-purple-dark cursor-pointer">
              <Plus />
            </span>
          </div>
          <div onClick={addToCart} className="bg-purple-dark flex justify-center items-center rounded-md px-2 cursor-pointer hover:bg-purple">
            <ShoppingCart size={20} weight="fill" color="white" />
          </div>
        </div>
      </div>
    </div>
  )
}
