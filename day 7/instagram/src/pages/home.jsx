import  { Center,Flex,Box } from "@chakra-ui/react";
import ContentCard from "../components/contentCard";
import Navbar from "../components/navbar";

export default function Home() {
return ( 
    <>
    <Box bgColor={"#FAFAFA"}  minW={821}>
    <Navbar/>
    <Center paddingY={"7"} >
        <Flex display="inline-flex" flexDir={"column"}>
        <ContentCard  />
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>     
        </Flex>
    </Center>

    </Box>
    </>
)
}