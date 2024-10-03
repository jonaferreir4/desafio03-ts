import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/AppContext";

interface UserData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
}

export const Perfil = () => {
    const [userData, setUserData] = useState<null | UserData>(null);
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AppContext);

    useEffect(() => {
        console.log(isLoggedIn)
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data: any = await api ; 
                setUserData(data);
            } catch (error) {
                console.error("Erro ao buscar dados do usuário", error);
            }
        };

        getData();
    }, []);

    return (
        <Center mt="60">
        {!userData ? (
            <Spinner/>
        ) : (
            <Box border="2px" borderColor="gray.200" borderRadius="md" p={4} w="300px">
            <Text fontSize="lg" fontWeight="bold">
                Nome: {userData?.name}
            </Text>
            <Text fontSize="md" color="gray.200">
                Email: {userData?.email}
            </Text>
        </Box>
        ) }

        
        </Center>
    );
};
