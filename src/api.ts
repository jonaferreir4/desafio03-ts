import axios from "axios"

const URL = "http://localhost:5000"


export const api = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: false

})

api.interceptors.request.use((config) => {
    const tokenData = localStorage.getItem('token-data')

    if(tokenData) {
        const { token } = JSON.parse(tokenData)
        if(token) {
            config.headers. Authorization  = `Bearer ${token}`
        }
    }
    return config
}, (error) => {
    return Promise.reject(error)
})