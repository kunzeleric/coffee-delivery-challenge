import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import Logo from '../assets/logo-coffee.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
export const Header = () => {

  const { cartItems } = useContext(CartContext)

  const totalItems = cartItems.reduce((total, item) => total + (item.qtd), 0);

  return (
    <header className="flex justify-around items-center py-8 px-40 bg-background">
      <Link to='/'><img src={Logo} alt="" /></Link>
      <div className="flex gap-4 items-center">
        <div className="flex gap-1 items-center bg-purple-light p-2.5 rounded-md">
          <MapPin size={25} color='#8047F8' weight='fill' />
          <p className="text-purple-dark text-sm">Curitiba, PR</p>
        </div>
        <Link to='/checkout'>
          <div className="bg-yellow-light relative p-2.5 rounded-md">
            {
              totalItems ?
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-6 w-6 bg-yellow-dark rounded-full text-md text-white font-bold">
                  {totalItems}
                </span>
                : null
            }
            <ShoppingCart size={25} color='#C47F17' weight='fill' />
          </div>
        </Link>
      </div>
    </header>
  )
}
