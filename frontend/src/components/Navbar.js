import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const logout = ()=>{
        setUser({})
        localStorage.removeItem("token")
    }
    if(user){
        return(
            <ul>
                <li>
                    <Link to='/'></Link>
                </li>
                <li>Welcome{user}</li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li onClick={logout}>
                    <Link to='/logout'>Logout</Link>
                </li>

            </ul>
        )

    }else{
        return (
            <ul>
                <li>
                    <Link to='/'></Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
          )
        }
    }


export default Navbar