import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import BASE_URL from '../api'
import { storedToken,getToken, removeToken } from '../service/asyncStorageService'


const AuthContext = createContext()

export const AuthProvider  = ({ children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [token, setToken] = useState(null)

    useEffect(()=>{
        const loadToken = async ()=>{
            const storedToken = await getToken()
          if(storedToken){
                setToken(storedToken)
                setIsLoggedIn(true)
            }
        }
        loadToken()
    },[])

    const login = async(username,password)=>{
            try{
                const response = await BASE_URL.post('identity/auth/token',{username,password})
                const token = response.data.result.token
                storedToken(token)
                setToken(token) 
                setIsLoggedIn(true)
                
            }catch(err){
              throw err
            }
    }
    const logout = async()=>{    
            try{
                await BASE_URL.post('identity/auth/logout',{token})
            await removeToken()
            setToken(null)
            setIsLoggedIn(false)
            }catch(err){
                console.log(err);
                Alert.alert('Thông báo',err.response?.data?.message||'dang xuat that bai')
            }
    }

  return (
    <AuthContext.Provider value={{ isLoggedIn,token,login,logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext 

