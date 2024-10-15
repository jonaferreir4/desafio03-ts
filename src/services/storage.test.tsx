import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const tokenData = {
    name: 'jona',
    token: '1234'
}

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    it('Deve retornar o objeto no localStorage com a chave tokenData', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('token-data')
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('token-data', JSON.stringify(tokenData))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(tokenData)
        expect(mockSetItem).toHaveBeenCalledWith('token-data', JSON.stringify(tokenData))
    })
})