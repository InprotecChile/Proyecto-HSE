import { useFormik } from "formik";
import "./perfil.scss";
import user from "../assets/img/user.jpg";

const validate = (values) => {
  const errors = {};

  if(!values.password){
    errors.password = "Campo requerido";
  }else if(values.password.length < 6){
    errors.password = "La contraseña debe contener al menos 6 caracteres";
  }

  if(!values.newpassword){
    errors.newpassword = "Campo requerido";
  }else if(values.password.length < 6){
    errors.newpassword = "La nueva contraseña debe contener al menos 6 caracteres";
  }

  return errors;
}

const Perfil = () => {
  const formik = useFormik({
    initialValues:{
      password: "",
      newpassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert("Form enviado, datos: " + JSON.stringify(values, null, 2));
    }, 
  });
  return (
      <div className="container">
        <h4 className="fw-semibold my-3">Mi perfil</h4>
        {/* información personal */}
        <h6 className="fw-semibold">Información Personal</h6>
        <div className="row">
          {/* foto */}
          <div className="col-2">
            <img src={user} alt="user" width="180px" className="circulo"/>
          </div>
          {/* nombre, rut, fnac, cargo */}
          <div className="col-5">
            <div className="row">
              <div className="col-4 text-end">
                <label className="form-label" for="inputNombre">Nombre*</label>
              </div>
              <div className="col-8">
                  <input className="form-control" type="text" placeholder="Nombre" id="inputNombre"/>
              </div>
            </div>

            <div className="row">
              <div className="col-4 text-end">
                <label className="form-label" for="inputRut">Rut*</label>
              </div>
              <div className="col-8">
                  <input className="form-control" type="text" placeholder="Rut" id="inputRut"/>
              </div>
            </div>

            <div className="row">
              <div className="col-4 text-end">
                <label className="form-label" for="inputFechaNacimiento">Fecha Nacimiento*</label>
              </div>
              <div className="col-8">
                  <input className="form-control" type="text" placeholder="dd-mm-aaaa" id="inputFechaNacimiento"/>
              </div>
            </div>

            <div className="row">
              <div className="col-4 text-end">
                <label className="form-label" for="inputCargo">Cargo*</label>
              </div>
              <div className="col-8">
                  <input className="form-control" type="text" placeholder="Cargo" id="inputCargo"/>
              </div>
            </div>
          </div>
          {/* correo, dirección, telefono */}
          <div className="col-5">
            <div className="row">
              <div className="col-4 text-end">
                <label className="form-label" for="inputCorreo">Correo*</label>
              </div>
              <div className="col-8">
                  <input className="form-control" type="text" placeholder="Correo" id="inputCorreo"/>
              </div>
            </div>

            <div className="row">
              <div className="col-4 text-end">
                <label className="form-label" for="inputDireccion">Dirección</label>
              </div>
              <div className="col-8">
                  <input className="form-control" type="text" placeholder="Dirección" id="inputDireccion"/>
              </div>
            </div>

            <div className="row">
              <div className="col-4 text-end">
                <label className="form-label" for="inputTelefono">Teléfono*</label>
              </div>
              <div className="col-8">
                  <input className="form-control" type="text" placeholder="Teléfono" id="inputTelefono"/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <input className="form-control my-2" type="file" id="formFile"/>
        </div>
        {/* información de seguridad */}
        <h6 className="fw-semibold my-3">Información de Seguridad</h6>
        <div className="row">
          <div className="col-2 text-end">
            <label className="form-label" for="inputContraseñaActual">Contraseña Actual*</label>
          </div>
          <div className="col-3">
            <input className="form-control" type="text" placeholder="Contraseña Actual" id="inputContraseñaActual"/>
          </div>
        </div>
        <div className="row">
          <div className="col-2 text-end">
            <label className="form-label" for="inputNuevaContraseña">Nueva Contraseña*</label>
          </div>
          <div className="col-3">
            <input className="form-control" type="text" placeholder="Nueva Contraseña" id="inputNuevaContraseña"/>
          </div>
        </div>
        <div className="row">
          <div className="col-2 text-end">
            <label className="form-label" for="inputConfirmarContraseña">Confirmar Contraseña*</label>
          </div>
          <div className="col-3">
            <input className="form-control" type="text" placeholder="Confirmar Contraseña" id="inputConfirmarContraseña"/>
          </div>
        </div>
        

        {/* guardar cambios */}
        <div className="text-center">
          <button type="button" class="btn btn-primary m-1">Guardar Cambios</button>
        </div>
          

      </div>
    );
  };


  
  
  export default Perfil;