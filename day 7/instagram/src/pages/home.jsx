import  { Center,Flex,Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import ContentCard from "../components/contentCard";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import {axiosInstance} from "../config/config.js"
export default function Home() {

const [posts,setPosts] = useState([])

const fetchPosts = async ()=> {
    await axiosInstance.get("posts").then((res)=> {
        console.log(res)
        setPosts(res.data)
    })
    
}

useEffect(()=> {
    fetchPosts();
},[])

return ( 
    <>
    <Box bgColor={"#FAFAFA"}  minW={821} minH={"100vh"}>
    <Navbar/>
    <Center gap={10} paddingY={"14"} >
        <Flex display="inline-flex" flexDir={"column"}>
            {
                posts.map((val,idx)=> {
                    return (
                    <ContentCard key={idx} data={val} />
                    )
                })
            }
        </Flex>
        <Flex p={"fixed"}  alignSelf="baseline">
            <SideBar/>
        </Flex>
    </Center>
    </Box>
    </>
)
}