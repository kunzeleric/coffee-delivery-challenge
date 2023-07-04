import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { CartContextProvider } from "./context/CartContext"
import { FormContextProvider } from "./context/FormContext"

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <FormContextProvider>
          <Router />
        </FormContextProvider>
      </CartContextProvider>
    </BrowserRouter >
  )
}

export default App
