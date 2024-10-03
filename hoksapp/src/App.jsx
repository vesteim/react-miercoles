import Hooks from "./components/hooks";
import CambiarColor from "./components/cambiarColor";
import { createContext } from "react";

export let color = createContext();


function App() {
  

  return (
    <>
    <color.Provider value="claro">
      <Hooks />
      <CambiarColor />
    </color.Provider>
     
    </>
  )
}

export default App
