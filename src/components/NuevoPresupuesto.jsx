import React from "react";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setPresupuesto(0);
    }
    setIsValidPresupuesto(true);
  };

  const handleChange = (e) => {
    const validateNumber = new RegExp(/^[0-9]*$/);
    const valorInput = e.target.value;
    if (validateNumber.test(valorInput)) {
      setPresupuesto(Number(valorInput));
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu presuepuesto"
            value={presupuesto}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
