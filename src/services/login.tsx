import { api } from "../api"

interface UserData {
    email: string;
    name: string;
}

export const login = async (email: string, password: string): Promise<UserData | null> => {
    try {
        const response = await api.post('/login', {email, password})
        return response.data

    }catch(e) {
        console.log(e)
        return null
    }   

}
