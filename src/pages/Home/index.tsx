import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import CoffeeDelivery from '../../assets/main-img.png'
import mockData, { Cafe } from '../../mock/coffees.ts'
import { ProductCard } from './components/ProductCard.tsx'
export const Home = () => {
  return (
    <>
      <main className="flex justify-center gap-20 overflow-hidden px-40 bg-[url(./assets/bg-main.svg)] bg-cover py-20">
        {/*Left*/}
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-alt font-bold leading-tight text-base-title">Encontre o café perfeito <br /> para qualquer hora do dia</h1>
            <p className="text-xl text-base-subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-dark">
                <ShoppingCart size={22} color='white' weight="fill" />
              </div>
              <p className="text-md text-base-title">Compra simples e segura</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-base-text">
                <Package color='white' size={22} />
              </div>
              <p className="text-md text-base-title">Embalagem mantém o café intacto</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow">
                <Timer color='white' size={22} weight="fill" />
              </div>
              <p className="text-md text-base-title">Entrega rápida e rastreada</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple">
                <Coffee color='white' size={22} weight="fill" />
              </div>
              <p className="text-md text-base-title">O café chega fresquinho até você</p>
            </div>

          </div>
        </div>

        {/*Right*/}
        <img src={CoffeeDelivery} alt="" />
      </main>

      <div className="flex flex-col items-center pb-20">
        <h4 className="text-3xl font-alt font-extrabold text-base-subtitle py-8">
          Nossos Cafés
        </h4>
        <div className="grid grid-cols-4 gap-12">
          {
            mockData.map((data: Cafe) => {
              return <ProductCard key={data.id} cafeInfo={data} />
            })
          }
        </div>
      </div>

    </>
  )
}
