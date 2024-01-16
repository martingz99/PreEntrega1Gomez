const Form = ({ datosForm, guardarDatosInput, enviarOrder }) => {
    return (
      <form onSubmit={enviarOrder} >
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} />
  
          <label htmlFor="telefono">Telefono</label>
          <input type="text" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} />
  
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} />
  
          <button type="submit">Enviar orden</button>
        </form>
    )
  }
  export default Form