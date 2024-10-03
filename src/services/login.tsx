import { api } from "../api"

interface UserData {
    email: string;
    name: string;
}

export const login = async (email: string, password: string): Promise<UserData | null> => {
    const data: any = await api
    
    if(email !== data.email || password !== data.password) {
        return null
    }

    return  {
        email: data.email,
        name: data.name,
    };
}
