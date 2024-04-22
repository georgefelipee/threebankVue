import { defineStore } from 'pinia'
import {ref} from "vue";
import axios from "@/http/axios";

export const useAuthStore = defineStore('useAuthStore',()=> {
    const token = ref(localStorage.getItem('token'))
    const user = ref(JSON.parse(localStorage.getItem('user') || '{}'))

    function setToken(tokenValue: string) {
        localStorage.setItem('token', tokenValue)
        token.value = tokenValue
    }
    function setUser(userValue: string) {
        localStorage.setItem('user', userValue)
        user.value = userValue
    }

    async function checkToken() : Promise<boolean> {
        try {
            const tokenAuth = 'Bearer ' + token.value
            const { data } = await axios.get('http://localhost:8080/users/decode', {
                headers: {
                    Authorization: tokenAuth
                }
            })
            setUser(JSON.stringify(data) )
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    function clear(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        token.value = ''
        user.value = ''
    }

    return {
        setToken,
        setUser,
        token,
        checkToken,
        clear
    }
})