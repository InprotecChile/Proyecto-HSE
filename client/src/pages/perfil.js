import { useFormik } from "formik";

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
      <div className="container m-4">
        <h4 className="fw-semibold">Mi perfil</h4>
        <div className="container m-3">
          {/* información personal */}
          <h6 className="fw-semibold">Información Personal</h6>
          <div className="row">
            {/* foto */}
            <div className="col-2">
              {/* <img src={user} alt="user" width="225px" className="circulo"/> */}
            </div>
            {/* nombre, rut, fnac, cargo */}
            <div className="col-5">
              <p>a</p>
            </div>
            {/* correo, dirección, telefono */}
            <div className="col-5">
              <p>a</p>
            </div>
          </div>
          {/* información de seguridad */}
          <h6 className="fw-semibold">Información de Seguridad</h6>
          <div className="row">
            <p>a</p>
          </div>
          {/* guardar cambios */}
          <div className="text-center">
            <button type="button" class="btn btn-primary m-1">Guardar Cambios</button>
          </div>
          
        </div>
        
        


      </div>
    );
  };


  
  
  export default Perfil;