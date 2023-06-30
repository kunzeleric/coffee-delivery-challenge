import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react"
import { CartProduct } from "./components/CartProduct"

export const Checkout = () => {
  return (
    <div className="px-40 flex justify-center gap-8">
      {/*Left*/}
      <section className="flex flex-col gap-3">
        <h3 className="text-base-subtitle text-lg font-bold font-alt">Complete seu pedido</h3>
        <div className="bg-base-card p-10 rounded-md flex flex-col gap-8">
          <div className="flex gap-2">
            <MapPinLine size={24} weight="regular" color="#C47F17" />
            <div>
              <h4 className="text-base-subtitle text-base">Endereço de Entrega</h4>
              <p className="text-base-text text-sm">Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <input className="text-base-text rounded-md bg-base-input border-base-button placeholder:text-base-label w-52" type="text" placeholder="CEP" />
              <input className="text-base-text rounded-md bg-base-input border-base-button placeholder:text-base-label" type="text" placeholder="Rua" />
            </div>
            <div className="flex gap-4">
              <input className="text-base-text rounded-md bg-base-input border-base-button placeholder:text-base-label" type="text" placeholder="Número" />
              <input className="text-base-text rounded-md bg-base-input border-base-button placeholder:text-base-label w-full" type="text" placeholder="Complemento" />
            </div>
            <div className="flex gap-4">
              <input className="text-base-text rounded-md bg-base-input border-base-button placeholder:text-base-label" type="text" placeholder="Bairro" />
              <input className="text-base-text rounded-md bg-base-input border-base-button placeholder:text-base-label w-full" type="text" placeholder="Cidade" />
              <input className="text-base-text rounded-md bg-base-input border-base-button placeholder:text-base-label w-14" type="text" placeholder="UF" />
            </div>
          </form>
        </div>

        <div className="bg-base-card p-10 rounded-md flex flex-col gap-8">
          <div className="flex gap-2">
            <CurrencyDollar color="#8047F8" size={24} />
            <div className="flex flex-col">
              <h4 className="text-base-subtitle text-base">Pagamento</h4>
              <p className="text-base-text text-sm">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex gap-3 bg-base-button rounded-md p-4 hover:bg-base-hover">
              <CreditCard color="#8047F8" size={20} />
              <p>Cartão de crédito</p>
            </button>
            <button className="flex gap-3 bg-base-button rounded-md p-4 hover:bg-base-hover">
              <Bank color="#8047F8" size={20} />
              <p>Cartão de crédito</p>
            </button>
            <button className="flex gap-3 bg-base-button rounded-md p-4 hover:bg-base-hover">
              <Money color="#8047F8" size={20} />
              <p>Cartão de crédito</p>
            </button>
          </div>
        </div>
      </section>



      {/*Right*/}
      <section className="flex flex-col gap-3">
        <h3 className="text-base-subtitle text-lg font-bold font-alt">Cafés selecionados</h3>
        <div className="bg-base-card p-10 rounded-md flex flex-col gap-8">
          {
            <div className="flex flex-col gap-4">
              <CartProduct />
              <CartProduct />
            </div>
          }
          <div className="flex flex-col">
            <div className="flex flex-col py-6 gap-3">
              <div className="flex justify-between items-center">
                <p className="text-base-text text-sm">Total de Itens</p>
                <span className="text-base-text">R$ 30,00</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-base-text text-sm">Entrega</p>
                <span className="text-base-text">R$ 10,00</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-base-subtitle text-xl font-bold">Total</p>
                <span className="text-base-subtitle text-xl font-bold">R$ 40,00</span>
              </div>
            </div>
            <button className="border-0 bg-yellow hover:bg-yellow-dark px-28 py-2 uppercase rounded-md text-white font-bold">Confirmar pedido</button>
          </div>
        </div>
      </section>
    </div>
  )
}
