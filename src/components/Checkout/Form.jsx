import "./Form.css"

const Form = ({ datosForm, guardarDatosInput, enviarOrder }) => {
    return (
      <form className="formulario" onSubmit={enviarOrder} >
          <label className="label" htmlFor="nombre">Nombre</label>
          <input className="input" type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} />
  
          <label className="label" htmlFor="telefono">Telefono</label>
          <input className="input" type="text" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} />
  
          <label className="label" htmlFor="email">Email</label>
          <input className="input" type="text" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} />
  
          <button className="boton" type="submit">Enviar orden</button>
        </form>
    )
  }
  export default Form