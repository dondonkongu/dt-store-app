import AsyncStorage from '@react-native-async-storage/async-storage'


export const KEY_TOKEN = 'accessToken'

export const storedToken = async (token) => {
    try {
        await AsyncStorage.setItem(KEY_TOKEN, token)
    } catch (error) {
        console.log(error)
    }
}

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem(KEY_TOKEN)
        return token
    } catch (error) {
        console.log(error)
    }
}

export const removeToken = async () => {
    try {
        await AsyncStorage.removeItem(KEY_TOKEN)
    } catch (error) {
        console.log(error)
    }
}