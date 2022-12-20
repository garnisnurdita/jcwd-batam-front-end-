import { Center, Image } from "@chakra-ui/react";
import InstagramLogo from "../assets/logo.png"
export default function Loading() {
    return (
        <Center width={"100vw"} height="90vh" >
            <Image src={InstagramLogo} w="80px" h={"80px"}></Image>
        </Center>
    )
}