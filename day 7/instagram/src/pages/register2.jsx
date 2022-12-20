import  { Center,Flex,Box,Image } from "@chakra-ui/react";
import InstagramLogin from "../assets/ig-login.png"
import Register2 from "../components/register2";

export default function RegisterPage2() {

return ( 
    <>
    <Box bgColor={"#FAFAFA"} minW={821} minH={"100vh"}  >
    <Center gap={8} flexWrap="wrap" paddingY={"14"} minH={"100vh"}>


        <Flex display="inline-flex" flexDir={"column"}>
        <Register2/>
        </Flex>
    </Center>
    </Box>
    </>
)
}
