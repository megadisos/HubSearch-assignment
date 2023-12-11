import { loginApi } from "../Infraestructure/login"
import { ILoginForm } from "../Models/Login"

export const login = async (loginData:ILoginForm) =>{
    try {
        const response = await loginApi(loginData)
        if(response.error === null && response.token){
            const authObject = {username:loginData.username,token:response.token,userId:response.userId}
            localStorage.setItem('authentication',JSON.stringify(authObject))
            return {status:true,error:null}
        }
    } catch (error:any) {
        return {status:false,error:error.response.data}    
    }
    
}



export const getLogedUsername = () =>{
    const authentication = localStorage.getItem('authentication')
    if(authentication !== null){
        return JSON.parse(authentication).username
    }
    return null
}


export const getLogedUserId = () =>{
    const authentication = localStorage.getItem('authentication')
    if(authentication !== null){
        return JSON.parse(authentication).userId
    }
    return null
}


export const getLogedToken= () =>{
    const authentication = localStorage.getItem('authentication')
    if(authentication !== null){
        return JSON.parse(authentication).token
    }
    return null
}


export const isAuthenticated =() =>{
    return getLogedUserId() && getLogedToken()
}