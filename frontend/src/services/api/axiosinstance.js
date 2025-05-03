import axios from 'axios'

const axios_Instance = new axios.create({
    baseURL: import.meta.env.VITE_BACKEND_ENTRYPOINT,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
})

export default axios_Instance