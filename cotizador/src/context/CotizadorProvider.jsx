import { createContext, useState } from "react";
import { calcularMarca, obtenerDiferennciaYear, calcularPlan, formatearDinero } from "../helpers";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {
        //Una base
        let resultado = 2000
        //Obtener diferencia de anio
        const diferencia = obtenerDiferennciaYear(datos.year)
        //Hay que restar el 3% por cada anio
        resultado -= ((diferencia * 3) * resultado / 100)
        //Americano 15%
        //Europeo 30%
        //Asiatico 5%
        resultado *= calcularMarca(datos.marca)
        //Basico 20%
        //Completo 50%
        resultado *= calcularPlan(datos.plan)
        resultado = formatearDinero(resultado)

        setCargando(true)

        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000)
    }

    return (
        <CotizadorContext.Provider
            value={{
                datos,
               handleChangeDatos,
               error,
               setError,
               cotizarSeguro,
               resultado,
               cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext