import  { Center,Flex,Box } from "@chakra-ui/react";
import Register from "../components/register";

export default function RegisterPage() {

return ( 
    <>
    <Box bgColor={"#FAFAFA"} minW={821} minH={"100vh"}  >
    <Center gap={8} flexWrap="wrap" paddingY={"14"} minH={"100vh"}>
        <Flex display="inline-flex" flexDir={"column"}>
        <Register/>
        </Flex>
    </Center>
    </Box>
    </>
)
}
