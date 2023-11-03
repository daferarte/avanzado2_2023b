import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { logOut, signIn, signUp } from "../store/user";

let SignIn=(props)=>{
    let dispatch = useDispatch();

    let user = useSelector(state=>state.user.user);

    console.log(user);

    let doSignIn = ()=>{
        dispatch(
            signUp({
                credential:{
                    email:"danie@daniel.com",
                    password:"12345"
                }                
            })
        )
    }

    let doLogOut = ()=>{
        dispatch(
            logOut()
        )
    }

    return(
        <div>
            {
            user?<button onClick={doLogOut}>Cerrar sesion</button>:<button onClick={doSignIn}>Ingresar</button>
            }
        </div>
    )
}

export default SignIn;