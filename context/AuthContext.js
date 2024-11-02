import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BASE_URL from '../api'


const AuthContext = createContext()

const AuthProvider  = ({ children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [token, setToken] = useState(null)

    useEffect(()=>{
        const loadToken = async ()=>{
            const storedToken = await AsyncStorage.getItem('jwtToken')
            if(storedToken){
                setToken(storedToken)
                setIsLoggedIn(true)
            }
        }
        loadToken()
    },[])

    const login = async(username,password)=>{
            try{
                const response = await BASE_URL.post('/auth/login',{username,password})
                const token = response.data.token
                await AsyncStorage.setItem('jwToken',token)
                setToken(token) 
                setIsLoggedIn(true)
            }catch(err){
                throw new Error(err.response.data.message||'dang nhap that bai')
            }
    }
    const logout = async()=>{    
            await AsyncStorage.removeItem('jwtToken')
            setToken(null)
            setIsLoggedIn(false)
    }

  return (
    <AuthContext.Provider value={{ isLoggedIn,token,login,logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider 

