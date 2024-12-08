import Campo from "./Campo"
import { useEffect } from "react"
import useUsuario from "../hooks/useUsuario"

const Usuario = () => {
    const {
        users,
        getUsuarios,
        titleModal,
        setTitleModal,
        email,
        setEmail,
        password,
        setPassword,
        name,
        setName,
        role,
        setRole,
        avatar,
        setAvatar,
       
        //setTitleModal,
        //operation,
        //setOperation,
        openModal,
        guardarEditarUsuario,
        deleteUsuario,
        
        
    } = useUsuario()
    
    useEffect(() => {
        getUsuarios()
       
    }, [])



    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-4 offset-md-4">
                    <div className="d-grid mx-auto">
                        <button onClick={()=> openModal(1)}  className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalUsuario">
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
                                {
                                    users.map((user, i) =>(
                                        <tr key={user.id}>
                                            <td>{i + 1}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>{user.name}</td>
                                            <td>{user.role}</td>
                                            <td>{user.avatar}</td>
                                            <td>
                                                <button onClick={()=> openModal(2, user.id, user.email, user.password, user.name, user.role, user.avatar )} className="btn btn-warning" data-bs-toggle='modal' data-bs-target='#modalUsuario'>
                                                    <i className="fa-solid fa-edit" />
                                                </button>
                                                <button onClick={()=> deleteUsuario(user.id)}className="btn btn-danger" >
                                                <i className="fa-solid fa-trash" />
                                                </button>
                                            </td>
                                        
                                        
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>    

            <div id='modalUsuario' className="modal fade" aria-hidden='true'>

                <div className="modal-dialog">
                    <div className="modal-content">
                        
                        <div className="modal-header">
                            <label className="h5">{titleModal}</label>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="close" />
                        </div>

                        <div className="modal-body">
                            <input type="hidden" id='id'  />
                            
                            <Campo idCampo='email' iconName='fa-solid fa-gift' placeholderName="email de usuario" tipoCampo="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Campo idCampo='password' iconName='fa-solid fa-gift' placeholderName="password" tipoCampo="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <Campo idCampo='name' iconName='fa-solid fa-gift' placeholderName="nombre" tipoCampo="text" value={name} onChange={(e) => setName(e.target.value)}/>
                            <Campo idCampo='role' iconName='fa-solid fa-gift' placeholderName="role" tipoCampo="text" value={role} onChange={(e) => setRole(e.target.value)}/>
                            <Campo idCampo='avatar' iconName='fa-solid fa-gift' placeholderName="avatar" tipoCampo="url" value={avatar} onChange={(e) => setAvatar(e.target.value)}/>
                            
                        </div>

                        <div className="modal-footer">
                            <button onClick={()=>guardarEditarUsuario()} className="btn btn-success">
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