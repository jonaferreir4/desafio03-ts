const conta = {
    email: 'jona@gmail.com',
    password: '123456',
    name: 'Jona Ferreira',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
