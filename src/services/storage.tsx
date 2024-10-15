interface ITokenData {
    name?: string,
    token?: string
}

const tokenData = {
    name: '',
    token: ''
}



export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('token-data')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('token-data', JSON.stringify(tokenData))
}

export const changeLocalStorage = (tokenData: ITokenData | null): void => {
    localStorage.setItem('token-data', JSON.stringify(tokenData))
}
