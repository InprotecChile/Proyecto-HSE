import "./proyecto.scss";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if(!values.password){
    errors.password = "Campo requerido";
  }else if(values.password.length < 6){
    errors.password = "La contraseña debe contener al menos 6 caracteres";
  }

  return errors;
}

const Proyecto = () => {
  const formik = useFormik({
    initialValues:{
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert("Form enviado, datos: " + JSON.stringify(values, null, 2));
    }, 
  });
    return (
      <div className="container-fluid p-4">
        <div>
          <button type="button" className="btn btn-primary m-2">Añadir Proyecto</button>
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Proyecto Cátodos
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse m-3" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              {/* información + boton desvincular proyecto */}
              <div className="row justify-content-between">
                <div className="col-3">
                  <h6 className="fw-semibold">Información Proyecto</h6>
                </div>
                <div className="col-3">
                  <button type="button" class="btn btn-primary m-1">Guardar</button>                  
                  <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmar">Desvincular Proyecto</button>

                  {/* ventana confirmar contraseña */}
                  <div class="modal fade center" id="confirmar" tabindex="-1" aria-labelledby="confirmar" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Desvincular Proyecto</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                          <form onSubmit={formik.handleSubmit}>
                            <div class="modal-body">
                              <div className="row">
                                <h6>Confirmar contraseña</h6>
                              </div>
                              <div className="row">
                              
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
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                              <input
                                type="submit"
                                value="Desvincular Proyecto"
                                className="btn btn-danger btn-block text-white"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <p className="fw-light">(*)Campo requerido</p>
              {/* datos proyecto */}
              <div className="row">
                {/* primera columna  */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-4 text-end">
                      <p>Nombre Proyecto*</p>
                    </div>
                    <div className="col-8">
                      <input className="form-control" type="text" placeholder="Nombre Proyecto" aria-label="default input example"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-4 text-end">
                      <p>Fecha Inicio*</p>
                    </div>
                    <div className="col-8">
                      <input className="form-control" type="text" placeholder="dd-mm-aaaa" aria-label="default input example"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-4 text-end">
                      <p>Fecha Término*</p>
                    </div>
                    <div className="col-8">
                      <input className="form-control" type="text" placeholder="dd-mm-aaaa" aria-label="default input example"/>
                    </div>
                  </div>
                </div>
                {/* segunda columna */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-4 text-end">
                      <p>Faena</p>
                    </div>
                    <div className="col-8">
                      <input className="form-control" type="text" placeholder="Faena" aria-label="default input example"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-4 text-end">
                      <label for="disabledTextInput" className="form-label">Cant. Trabajadores</label>
                    </div>
                    <div className="col-8">
                      <input className="form-control" type="text" value="N° Trabajadores" aria-label="Disabled input example" disabled readonly/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-4 text-end">
                      <label for="disabledTextInput" className="form-label">Cant. Equipamiento</label>
                    </div>
                    <div className="col-8">
                      <input className="form-control" type="text" value="N° Equipamiento" aria-label="Disabled input example" disabled readonly/>
                    </div>
                  </div>
                </div>
              </div>

              {/* descripción */}
              <div className="mb-4">
                <h6 for="exampleFormControlTextarea1" className="form-label fw-semibold">Descripción</h6>
                <textarea className="form-control p-1" id="exampleFormControlTextarea1" rows="2"></textarea>
              </div>
              
              {/* documentos */}
              <div className="col-3 mb-4">
                <h6 className="fw-semibold">Documentos</h6>
                <input className="form-control form-control-sm" id="formFileSm" type="file"/>
              </div>
              

              {/* tabla documentos */}
              <table className="table text-center">
                <thead>
                  <tr class="table-light">
                    <th scope="col">Documento</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Alertas</th>
                    <th scope="col">Días Restantes</th>
                    <th scope="col">Emisión</th>
                    <th scope="col">Expiración</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr>
                    <th scope="row"><a>Contrato</a></th>
                    <td></td>
                    <td></td>
                    <td>dd</td>
                    <td>dd-mm-aaaa</td>
                    <td>dd-mm-aaaa</td>
                  </tr>
                  <tr>
                    <th scope="row">Control de Fatalidades</th>
                    <td></td>
                    <td></td>
                    <td>dd</td>
                    <td>dd-mm-aaaa</td>
                    <td>dd-mm-aaaa</td>
                  </tr>
                  <tr>
                    <th scope="row">Control de incidentes</th>
                    <td></td>
                    <td></td>
                    <td>dd</td>
                    <td>dd-mm-aaaa</td>
                    <td>dd-mm-aaaa</td>
                  </tr>
                </tbody>
              </table>

              {/* simbología expiración */}
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div class="col-3">
                    <p className="fw-semibold">Simbología Expiración</p>
                  </div>
                </div>
                <div className="row">
                  <div className="fw-light">
                    <div className="circulorojo col-4">
                      <div>Menos de 30 días</div>
                    </div>
                    
                    <div className="circuloamarillo col-4">
                      <div>Menos de 60 días</div>
                    </div>
                    
                    <div className="circuloverde col-4">
                      <div>Más de 60 días</div>
                    </div>
                    
                  </div>
                </div>
              </div>



            </div>

          </div>




          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Proyecto X
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Proyecto Y
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>
        </div>
      </div>
      
      
    );
  };
  
  export default Proyecto;