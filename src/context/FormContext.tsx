import { useState, createContext, ReactNode } from 'react'

export interface DadosUsuario {
    cep: string,
    rua: string | null,
    numero: string | null,
    complemento?: string | null,
    bairro: string | null,
    cidade: string | null,
    uf: string | null,
    metodoPagamento: string | null,
}

interface FormContextProps {
    formOrder: DadosUsuario,
    handleFormOrder: (order: DadosUsuario) => void
}

export const FormContext = createContext({} as FormContextProps)

interface FormContextProviderProps {
    children: ReactNode
}

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
    const [formOrder, setFormOrder] = useState({} as DadosUsuario)

    const handleFormOrder = (order: DadosUsuario) => {
        console.log(order)
        setFormOrder(order);
    }

    return (
        <FormContext.Provider value={{formOrder, handleFormOrder}}>
            {children}
        </FormContext.Provider>
    )
}
