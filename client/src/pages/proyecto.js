import React, { useState } from "react";
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
  const [numProyectos, setNumProyectos] = useState(1);

  const formik = useFormik({
    initialValues:{
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert("Form enviado, datos: " + JSON.stringify(values, null, 2));
    }, 
  });

  const agregarProyecto = () => {
    setNumProyectos(numProyectos + 1);
  }

  const eliminarProyecto = (id) => {
    const proyectoAEliminar = document.getElementById(id);
    if(proyectoAEliminar){
      proyectoAEliminar.remove();
    }
  }

  const proyectos = [];
  for (let i = 1; i <= numProyectos; i++) {
    proyectos.push(
      <div className="accordion-item" key={i} id={`proyecto-${i}`}>
        <h2 className="accordion-header" id={`flush-heading${i}`}>
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${i}`} aria-expanded="false" aria-controls={`flush-collapse${i}`}>
            Proyecto {i}
          </button>
        </h2>
        <div id={`flush-collapse${i}`} className="accordion-collapse collapse m-3" aria-labelledby={`flush-heading${i}`} data-bs-parent="#accordionFlushExample">
          {/* información + boton desvincular proyecto */}
          <div className="row">
              <div className="col-9">
                <h6 className="fw-semibold">Información Proyecto</h6>
              </div>
              <div className="col-3 text-end">
                <button type="button" className="btn btn-primary m-1">Guardar</button>                  
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmar">Desvincular Proyecto</button>
              </div>
              {/* ventana confirmar contraseña */}
              <div className="modal fade center" id="confirmar" tabindex="-1" aria-labelledby="confirmar" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Desvincular Proyecto</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                      <form onSubmit={formik.handleSubmit}>
                        <div className="modal-body">
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
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                          <input
                            type="submit"
                            value="Desvincular Proyecto"
                            className="btn btn-danger btn-block text-white"
                            onClick={() => eliminarProyecto(`proyecto-${i}`)}
                            data-bs-dismiss="modal"
                          />
                        </div>
                      </form>
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
              <textarea className="form-control p-1 mx-1" id="descripcionProyecto" rows="2"></textarea>
            </div>
            
            {/* documentos */}
            <h6 className="fw-semibold">Documentos</h6>
            <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#modaldocumentos">
              Cargar Documento
            </button>
            <div className="modal fade" id="modaldocumentos" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Cargar Documento</h1>
                    
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="container-fluid">
                      {/* Info documento */}
                      <h6>Información Documento</h6>
                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <div className="col-11">
                              <input className="form-control ms-5 m-1" type="file" id="formFile"/>
                            </div>
                            <div className="col-2 text-end">
                              <p>Título</p>
                            </div>
                            <div className="col-10">
                              <input className="form-control" type="text" placeholder="Titulo" aria-label="default input example"/>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="row">
                            <div className="col-3 text-end">
                              <p>Fecha Inicio</p>
                            </div>
                            <div className="col-9">
                              <input className="form-control" type="text" placeholder="dd-mm-aaaa" aria-label="default input example"/>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-3 text-end">
                              <p>Fecha Término</p>
                            </div>
                            <div className="col-9">
                              <input className="form-control" type="text" placeholder="dd-mm-aaaa" aria-label="default input example"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* descripción */}
                      <h6>Descripción Documento</h6>
                      <div className="p-2">
                      <textarea className="form-control p-1 mx-2" id="descripcionDocumento" rows="2"></textarea>
                      </div>
                      {/* alerta */}
                      <div className="m-1">
                        <h6>Alerta</h6>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" data-bs-target="#switch"/>
                          </div><div className="col-12" id="switch">
                              <p>asdas</p>
                          </div>

                          <h6>Información Alerta</h6>
                          <div className="row">
                            <div className="col-6">
                              <div className="row">
                                <div className="col-3 text-end">
                                  <p>Título Alerta</p>
                                </div>
                                <div className="col-9">
                                  <input className="form-control" type="text" placeholder="Titulo Alerta" aria-label="default input example"/>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3 text-end">
                                <label for="alertaProyecto" className="form-label">Proyecto</label>
                                </div>
                                <div className="col-9">
                                  <input className="form-control" type="text" placeholder="Proyecto" aria-label="default input example"/>
                                </div>
                              </div>
                            </div>
                            <div className="col-6">

                            </div>

                          </div>



                        
                      </div>
                      




                      <div className="text-center m-2">
                        <button type="button" className="btn btn-primary">Guardar</button>
                      </div>
                      
                    </div>
                    
                    
                  </div>
                  <div className="modal-footer">
                    <p className="fw-light">(*)Campo Obligatorio</p>

                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Understood</button> */}
                  </div>
                </div>
              </div>
            </div>



            {/* tabla documentos */}
            <table className="table text-center">
              <thead>
                <tr className="table-light">
                  <th scope="col">Documento</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Alertas</th>
                  <th scope="col">Días Restantes</th>
                  <th scope="col">Emisión</th>
                  <th scope="col">Expiración</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
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
                <div className="col-3">
                  <p className="fw-semibold">Simbología Expiración</p>
                </div>
              </div>
              <div className="row row-cols-auto justify-content-center text-center fw-light">
                
                <div className="circulorojo"></div>
                <div className="simbologia">Menos de 30 días</div>
              
                <div className="circuloamarillo"></div>
                <div className="simbologia">Menos de 60 días</div>
              
                <div className="circuloverde"></div>
                <div className="simbologia">Más de 60 días</div>
                
              </div>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid p-4">
      <div>
        <button type="button" className="btn btn-primary m-2" onClick={agregarProyecto}>Añadir Proyecto</button>
      </div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {proyectos}
      </div>
    </div>
  );
};
  
export default Proyecto;

