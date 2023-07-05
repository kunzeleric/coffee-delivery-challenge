import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react"
import { CartProduct } from "./components/CartProduct"
import { useContext, useState, FormEvent, ChangeEvent, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { DadosUsuario, FormContext } from "../../context/FormContext";
import { useNavigate } from "react-router-dom";


export const Checkout = () => {
  const navigate = useNavigate();

  const { cartItems, totalToPay, deliveryCost, clearCart } = useContext(CartContext);
  const { handleFormOrder } = useContext(FormContext);

  const [selectedPayment, setSelectedPayment] = useState(0);
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [metodoPagamento, setMetodoPagamento] = useState("");

  const handleCep = (event: ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  }

  const handleRua = (event: ChangeEvent<HTMLInputElement>) => {
    setRua(event.target.value);
  }

  const handleNumero = (event: ChangeEvent<HTMLInputElement>) => {
    setNumero(event.target.value);
  }

  const handleComplemento = (event: ChangeEvent<HTMLInputElement>) => {
    setComplemento(event.target.value);
  }

  const handleBairro = (event: ChangeEvent<HTMLInputElement>) => {
    setBairro(event.target.value);
  }

  const handleCidade = (event: ChangeEvent<HTMLInputElement>) => {
    setCidade(event.target.value);
  }

  const handleUf = (event: ChangeEvent<HTMLInputElement>) => {
    setUf(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(totalToPay === 0) {
      return;
    }

    const formUsuario: DadosUsuario = {
        cep: cep,
        rua: rua,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
        metodoPagamento: metodoPagamento
    }
    
    handleFormOrder(formUsuario);
    clearCart();
    navigate("/success")
    
  }

  useEffect(() => {
    switch (selectedPayment) {
      case 1:
        setMetodoPagamento('Cartão de Crédito')
        break;
      case 2:
        setMetodoPagamento('Cartão de Débito')
        break;
      case 3:
        setMetodoPagamento('Dinheiro')
        break;
      default:
        setMetodoPagamento('')
        break;
    }
  }, [selectedPayment])


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
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" id="checkout-form">
            <div className="flex flex-col gap-4">
              <input onChange={handleCep}className="text-base-text rounded-md bg-base-input border-base-button placeholder:text-base-label focus:ring-yellow-dark focus:border-yellow-dark w-52" type="text" placeholder="CEP" required />
              <input onChange={handleRua}className="text-base-text rounded-md bg-base-input border-base-button placeholder:text-base-label focus:ring-yellow-dark focus:border-yellow-dark" type="text" placeholder="Rua" required />
            </div>
            <div className="flex gap-4">
              <input onChange={handleNumero}className="text-base-text rounded-md bg-base-input border-base-button placeholder:text-base-label focus:ring-yellow-dark focus:border-yellow-dark" type="text" placeholder="Número" required />
              <input onChange={handleComplemento}className="text-base-text rounded-md bg-base-input border-base-button placeholder:text-base-label focus:ring-yellow-dark focus:border-yellow-dark w-full" type="text" placeholder="Complemento" />
            </div>
            <div className="flex gap-4">
              <input onChange={handleBairro}className="text-base-text rounded-md bg-base-input border-base-button placeholder:text-base-label focus:ring-yellow-dark focus:border-yellow-dark" type="text" placeholder="Bairro" required />
              <input onChange={handleCidade}className="text-base-text rounded-md bg-base-input border-base-button placeholder:text-base-label focus:ring-yellow-dark focus:border-yellow-dark w-full" type="text" placeholder="Cidade" required />
              <input onChange={handleUf}className="text-base-text rounded-md bg-base-input border-base-button placeholder:text-base-label focus:ring-yellow-dark focus:border-yellow-dark w-14" type="text" placeholder="UF" required />
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
            <button
              className={`${selectedPayment === 1 ? 'bg-purple-light border-purple border-[1px]' : 'bg-base-button'} flex gap-3 rounded-md p-4 hover:bg-base-hover`}
              onClick={() => setSelectedPayment(1)}
            >
              <CreditCard color="#8047F8" size={20} />
              <p>Cartão de crédito</p>
            </button>
            <button
              className={`${selectedPayment === 2 ? 'bg-purple-light border-purple border-[1px]' : 'bg-base-button'} flex gap-3 rounded-md p-4 hover:bg-base-hover`}
              onClick={() => setSelectedPayment(2)}
            >
              <Bank color="#8047F8" size={20} />
              <p>Cartão de crédito</p>
            </button>
            <button
              className={`${selectedPayment === 3 ? 'bg-purple-light border-purple border-[1px]' : 'bg-base-button'} flex gap-3 rounded-md p-4 hover:bg-base-hover`}
              onClick={() => setSelectedPayment(3)}
            >
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
          <div className="flex flex-col gap-4">
            {
              cartItems.length > 0 ?
                cartItems.map((item) => {
                  return <CartProduct item={item} key={item.id} />
                })
                : <p className="flex justify-center text-lg text-base-title font-bold">Sem Itens no Carrinho!</p>
            }
          </div>
          {
            cartItems.length > 0 ?

              (<div className="flex flex-col">
                <div className="flex flex-col py-6 gap-3">
                  <div className="flex justify-between items-center">
                    <p className="text-base-text text-sm">Total de Itens</p>
                    <span className="text-base-text">R$ {totalToPay.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-base-text text-sm">Entrega</p>
                    <span className="text-base-text">R$ {deliveryCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-base-subtitle text-xl font-bold">Total</p>
                    <span className="text-base-subtitle text-xl font-bold">R$ {(totalToPay + deliveryCost).toFixed(2)}</span>
                  </div>
                </div>
                <button
                  form="checkout-form"
                  type="submit"
                  className="border-0 bg-yellow hover:bg-yellow-dark px-28 py-2 uppercase rounded-md text-white font-bold"
                >
                  Confirmar pedido
                </button>
              </div>)

              :

              (<div className="flex flex-col">
                <div className="flex flex-col py-6 gap-3">
                  <div className="flex justify-between items-center">
                    <p className="text-base-text text-sm">Total de Itens</p>
                    <span className="text-base-text">R$ 0,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-base-text text-sm">Entrega</p>
                    <span className="text-base-text">R$ 0,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-base-subtitle text-xl font-bold">Total</p>
                    <span className="text-base-subtitle text-xl font-bold">R$ 0,00</span>
                  </div>
                </div>
                <button
                  form="checkout-form"
                  type="submit"
                  className="border-0 bg-yellow hover:bg-yellow-dark px-28 py-2 uppercase rounded-md text-white font-bold"
                >
                  Confirmar pedido
                </button>
              </div>)

          }
        </div>
      </section>
    </div>
  )
}
