import { Clock, CurrencyDollarSimple, MapPin } from "@phosphor-icons/react"
import successOrder from '../../assets/success-order.svg'
import { FormContext } from "../../context/FormContext"
import { useContext } from "react"

export const Success = () => {
  const { formOrder } = useContext(FormContext);

  return (
    <section className="flex justify-center gap-20 px-40 py-20">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow-dark font-bold font-alt text-3xl">Uhu! Pedido confirmado!</h1>
          <p className="text-lg text-base-subtitle">Agora é só aguardar que logo seu café chegará até você :)</p>
        </div>
        <div className="flex flex-col w-[520px] gap-9 rounded-tl-md rounded-br-md rounded-tr-4xl rounded-bl-4xl p-10 border-2 border-yellow-dark">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple">
              <MapPin size={22} color='white' weight="fill" />
            </div>
            <div>
              <p className="text-md text-base-subtitle">Entrega na <strong className="font-bold">Rua {formOrder.rua}, {formOrder.numero}</strong></p>
              <p className="text-md text-base-title">{formOrder.bairro}, {formOrder.cidade} - {(formOrder.uf?.toUpperCase())}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow">
              <Clock size={22} color='white' weight="fill" />
            </div>
            <div>
              <p className="text-md text-base-title">Previsão de entrega</p>
              <p className="text-md text-base-subtitle font-bold">20 min a 40 min</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-dark">
              <CurrencyDollarSimple size={22} color='white' weight="fill" />
            </div>
            <div>
              <p className="text-md text-base-title">Pagamento na entrega</p>
              <p className="text-md text-base-title font-bold">{formOrder.metodoPagamento}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={successOrder} alt="" />
      </div>
    </section>
  )
}
