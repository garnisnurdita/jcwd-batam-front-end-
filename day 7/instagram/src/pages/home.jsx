import  { Center,Flex,Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ContentCard from "../components/contentCard";
import Loading from "../components/loading";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import {axiosInstance} from "../config/config.js"
export default function HomePage(props) {
const userSelector = useSelector((state) => state.auth)
const [isLoading,setIsLoading] = useState(true)

const [posts,setPosts] = useState([])

const fetchPosts = async ()=> {
    await axiosInstance.get("posts").then((res)=> {
        setPosts(res.data)
      setTimeout(() => {
        setIsLoading(!isLoading)
      }, 500);  
    })
}

useEffect(()=> {
    fetchPosts();   
},[])



return ( 
    <>
    {
        isLoading? 
        <Loading/>
        :
        (
            <>
    <Navbar user={userSelector} />
    <Box bgColor={"#FAFAFA"}  minW={821} minH={"100vh"}>
    <Center gap={10} paddingY={"14"} >
        <Flex display="inline-flex" flexDir={"column"}>
            {
                posts.map((val,idx)=> {
                    return (
                    <ContentCard user={userSelector} key={idx} data={val} />
                    )
                })
            }
        </Flex>
        <Flex display="inline-flex" alignSelf="baseline">
            <SideBar user={userSelector} />
        </Flex>
    </Center>
    </Box>
            </>
        )
    }
   
    </>
)
}