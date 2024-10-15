import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import CardInfo from "../components/CardInfo"
import { AppContext } from "../components/AppContext"
import { getAllLocalStorage  } from '../services/storage'

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const Conta = () => {
    const [ userData, setUserData ] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    useEffect(() => {
        !isLoggedIn && navigate('/')
    }, [isLoggedIn, navigate])

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = getAllLocalStorage()
            setUserData(JSON.parse(data))
        }

        getData()
    }, [])

    const actualData = new Date()
    useEffect(() => {
        if(userData && id !== userData.id) {
            navigate('/')
        }
    }, [id, navigate, userData])
    
    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                    (  
                        <Center>
                            <Spinner size='xl' color='white'/>
                        </Center>
                    ) : 
                    (
                        <>
                            <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} />
                            <CardInfo mainContent='Saldo' content={`R$ 1111,00`}/>
                        </>
                    )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Conta
