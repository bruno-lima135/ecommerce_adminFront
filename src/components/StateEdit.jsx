import React from "react";
import { Link } from "react-router-dom";

function StateEdit() {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="border shadow p-4 rounded">
        <form action="">
          <label htmlFor="state">Estado de la orden</label>
          <select className="form-select" name="state" id="state">
            <option value="Pago" selected>
              Pago
            </option>
            <option value="En tránsito">En tránsito</option>
            <option value="Entregado">Entregado</option>
          </select>
          <button className="btn btn-success mt-4">Guardar cambios</button>
        </form>
        <Link to={"/ordenes"}>
          <i class="bi bi-arrow-left fs-2 text-black"></i>
        </Link>
      </div>
    </div>
  );
}

export default StateEdit;
