import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
    return (
        <div>
            <div className="listado-gastos contenedor">
                {
                    filtro ? (
                        <>
                           <h2>{gastosFiltrados.length ? 'Gastos' : 'Aun no hay gastos en esta categoría'}</h2>
                            {gastosFiltrados.map(gasto => (
                                <Gasto
                                    key={gasto.id}
                                    gasto={gasto}
                                    setGastoEditar={setGastoEditar}
                                    eliminarGasto={eliminarGasto}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                           <h2>{gastos.length ? 'Gastos' : 'Aun no hay gastos'}</h2>
                            {gastos.map(gasto => (
                                <Gasto
                                    key={gasto.id}
                                    gasto={gasto}
                                    setGastoEditar={setGastoEditar}
                                    eliminarGasto={eliminarGasto}
                                />
                            ))}
                        </>
                    )
                    }
            </div>
        </div>
    )
}

export default ListadoGastos