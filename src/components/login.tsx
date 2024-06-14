import { useEffect, useState } from 'react'
import '../styles/login.css'
import ImageLogin from '../Imagenes/Wavy_Gen-01_Single-07.jpg'
import {Link} from 'react-router-dom'
const API_URL = "http://localhost:3010/";

function login() {
    return (
        <div className="container-Login">
            <div className="login-info-container">
                <h1 className="titulo">Bienvenido</h1>
                <form className="inputs-container">
                    <input className="input" name="correo" type="text" placeholder="Email"/>
                    <input className="input" name="clave" type="password" placeholder="Contraseña"></input>
                    <button className="btn">Login</button>
                    <p>No tienes cuenta?<span><Link className="ancla" to="/register">Pica aqui</Link></span></p>
                </form>
            </div>
              <img src={ImageLogin} alt="" />
        </div>
    )
}
export default login;