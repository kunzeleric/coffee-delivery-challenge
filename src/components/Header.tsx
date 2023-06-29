import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import Logo from '../assets/logo-coffee.svg'
export const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-40 bg-background">
      <img src={Logo} alt="" />
      <div className="flex gap-4 items-center">
        <div className="flex gap-1 items-center bg-purple-light p-2.5 rounded-md">
          <MapPin size={25} color='#8047F8' weight='fill' />
          <p className="text-purple-dark text-sm">Curitiba, PR</p>
        </div>
        <div className="bg-yellow-light relative p-2.5 rounded-md">
          {
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-6 w-6 bg-yellow-dark rounded-full text-md text-white font-bold">
              0
            </span>
          }
          <ShoppingCart size={25} color='#C47F17' weight='fill' />
        </div>
      </div>
    </header>
  )
}
