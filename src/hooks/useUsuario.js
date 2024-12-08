import axios from "axios";
import { useState } from "react";
import {alertaError, alertaSuccess, alertaWarning} from "../alertas"
import Swal from "sweetalert2";

const useUsuario = () =>{

    const [users, setUsers] = useState([])
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [avatar, setAvatar] = useState('')
    const [titleModal, setTitleModal] = useState('')
    const [operation, setOperation] = useState(1)
    
    const url = 'https://api.escuelajs.co/api/v1/users'

    const getUsuarios = async () => {
        const response = await axios.get(url)
        setUsers(response.data)
    }

    const openModal = (operation, id, email, password, name, role, avatar) => {
        setId('')
        setEmail('')
        setPassword('')
        setName('')
        setRole('')
        setAvatar('')

        if (operation === 1) {
            setTitleModal('Registrar Usuario')
            setOperation(1)
        } else if(operation === 2) {
            setTitleModal('Editar Usuario')
            setOperation(2)
            setId(id)
            setEmail(email)
            setPassword(password)
            setName(name)
            setRole(role)
            setAvatar(avatar)
        }
    }

    const enviarSolicitud = async (urlApi, metodo, parametros = {}) => {
        let obj = {
            method: metodo,
            url: urlApi,
            data: parametros,
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        }

        await axios(obj).then(() => {
            let mensaje

            if (metodo === 'POST') {
                mensaje = 'Se guardó el usuario'
            } else if (metodo === 'PUT') {
                mensaje = 'Se editó el usuario'
            } else if (metodo === 'DELETE') {
                mensaje = 'Se eliminó el usuario'
            }
            alertaSuccess(mensaje)
            document.getElementById('btnCerrarModal').click()
            getUsuarios()
        }).catch((error) => {
            alertaError(error.response.data.message)
        })
    }

    //validaciones
    const guardarEditarUsuario = () => {
        let payload, metodo, urlAxios

        if (email === '') {
            alertaWarning('Email en blanco', 'email')
        } else if (password === '') {
            alertaWarning('Password en blanco', 'password')
        } else if (name === '') {
            alertaWarning('Nombre en blanco', 'name')
        } else if (role === '') {
            alertaWarning('Role en blanco', 'role')
        }else if (avatar === '') {
            alertaWarning('Avatar en blanco', 'avatar')
        }else {
            payload = {
                email: email,
                password: password,
                name:name,
                role: role,
                avatar: avatar,
                
            }
    
            if (operation === 1) {
                metodo = 'POST'
                urlAxios = url
            } else {
                metodo = 'PUT'
                urlAxios = `${url}/${id}`
            }
    
            enviarSolicitud(urlAxios, metodo, payload)
        }

    }

    const deleteUsuario = (id) => {
        Swal.fire({
            title: '¿Está seguro de eliminar el usuario?',
            icon: 'question',
            text: 'No habrá marcha atrás',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setId(id)
                enviarSolicitud(`${url}/${id}`, 'DELETE')
            }
        }).catch((error) => {
            alertaError(error)
        })
    }





    return {
        users,
        getUsuarios,
        titleModal,
        setTitleModal,
        id,
        setId,
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
       
    
        openModal,
        guardarEditarUsuario,
        deleteUsuario,



    }





}

export default useUsuario