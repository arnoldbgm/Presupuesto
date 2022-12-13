import Gasto from "./Gasto";
const ListadoGastos = ({
  filtro,
  gastosFiltrados,
  gastos,
  setGastoEditar,
  eliminarGasto,
}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? "Gastos" : "No hay gastos"}</h2>

      {filtro
        ? gastosFiltrados.map((gasto) => {
            return (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            );
          })
        : gastos.map((gasto) => {
            return (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            );
          })}
    </div>
  );
};

export default ListadoGastos;
