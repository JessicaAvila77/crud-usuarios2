
const Usuario = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-4 offset-md-4">
                    <div className="d-grid mx-auto">
                        <button  className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalUsuario">
                            Crear Usuario
                        </button>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Avatar</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>    

            <div id='modalUsuario' className="modal fade" aria-hidden='true'>

                <div className="modal-dialog">
                    <div className="modal-content">
                        
                        <div className="modal-header">
                            <label className="h5">Modal Usuario</label>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="close" />
                        </div>

                        <div className="modal-body">
                            <input type="hidden" id='id' />
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="fa-solid fa-gift"/>
                                </span>
                                <input type="text" id="email" className="form-control" placeholder="email del usuario"/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="fa-solid fa-gift"/>
                                </span>
                                <input type="text" id="password" className="form-control" placeholder="password del usuario"/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="fa-solid fa-gift"/>
                                </span>
                                <input type="text" id="name" className="form-control" placeholder="nombre de usuario"/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="fa-solid fa-gift"/>
                                </span>
                                <input type="text" id="role" className="form-control" placeholder="role"/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="fa-solid fa-gift"/>
                                </span>
                                <input type="text" id="avatar" className="form-control" placeholder="avatar"/>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-success">
                                <i className="fa-solid fa-floppy-disk"/> Guardar
                            </button>
                            <button id="btnCerrarModal" className="btn btn-danger"
                                data-bs-dismiss='modal'> Cerrar
                            </button>

                        </div>

                    </div> 

                                      
                </div>
       
            </div>







        </div>

       






    )

}

export default Usuario