import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if(!values.email){
    errors.email = "Campo requerido";
  }else if(!/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = "Dirección de correo inválida";
  }

  if(!values.password){
    errors.password = "Campo requerido";
  }else if(values.password.length < 6){
    errors.password = "La contraseña debe contener al menos 6 caracteres";
  }

  return errors;
}

const Login = () => {
  const formik = useFormik({
    initialValues:{
      email:"",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert("Form enviado, datos: " + JSON.stringify(values, null, 2));
    }, 
  });

  return (
    <div className="d-flex align-items-center">
      <div className="container p-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-center">Bienvenido/a</h2>

                <form onSubmit={formik.handleSubmit}>
                  <div className="row m-2">
                    <div className="col-2 text-end">
                      <label className="form-label" for="email">Usuario</label>
                    </div>
                    <div className="col-xxl-8">
                      <input className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}/>
                      {formik.touched.email && formik.errors.email ?(
                        <div className="labelError text-danger">{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-2 text-end">
                      <label className="form-label" for="password">Contraseña</label>
                    </div>
                    <div className="col-xxl-8">
                      <input className="form-control"
                        type="password"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}/>
                      {formik.touched.password && formik.errors.password ?(
                        <div className="labelError text-danger">{formik.errors.password}</div>
                      ) : null}
                    </div>
                  </div>
                </form>
              </div>

              <div className="d-flex justify-content-center m-3">
                <input
                  type="submit"
                  value="Iniciar Sesión"
                  className="btn btn-primary btn-block text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;