import { defineStore } from 'pinia'
import {ref} from "vue";
import axios from "@/http/axios";
import router from '../router/index'
import type {IUserData} from "@/interfaces/IUserData";

export const useAuthStore = defineStore('useAuthStore',()=> {
    const token = ref(localStorage.getItem('token'))
    const user = ref(JSON.parse(localStorage.getItem('user') || '{}'))
    const isAuth = ref(false)

    function setToken(tokenValue: string) {
        localStorage.setItem('token', tokenValue)
        token.value = tokenValue
    }

    function setUser(userValue) {
        localStorage.setItem('user', JSON.stringify(userValue) )
        user.value = userValue
        console.log(userValue)
    }

    function setIsAuth(auth: boolean) {
        isAuth.value = auth;
    }

    async function checkToken() {
        try {
            const tokenAuth = 'Bearer ' + token.value
            const { data } = await axios.get('http://localhost:8080/users/decode', {
                headers: {
                    Authorization: tokenAuth
                }
            })
            return data
        } catch (error) {
            clear()
            console.log(error?.response?.data)
        }
    }

    function clear(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        isAuth.value = false
        router.push({name: 'Login'})
        token.value = ''
        user.value = ''
    }

    return {
        setToken,
        setUser,
        token,
        user,
        checkToken,
        clear,
        setIsAuth,
        isAuth
    }
})