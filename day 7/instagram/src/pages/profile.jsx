import  { Center,Flex,Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import { useLocation  } from "react-router-dom";
import { axiosInstance } from "../config/config";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../components/loading";
export default function ProfilePage() {
    const userSelector = useSelector((state) => state.auth)
    const location = useLocation();
    const [isLoading,setIsLoading] = useState(true)

    const [posts, setPosts] = useState([])
    const [user, setUser] = useState({})
    const [isProfile, setIsProfile] = useState(false)

    async function fetchPost(username) {
        const res = await axiosInstance.get("/posts", { params : { username }})
        setPosts(res.data)
    }

    async function fetchUser(username){
    const res = await axiosInstance.get("/users", { params : { username }})
    setUser(res.data[0]) }


    useEffect(()=> {
    let username = location.pathname?.split("/")[1]
    if(username === userSelector.username) {
        setUser({...userSelector})
            fetchPost(userSelector.username)
            setIsProfile(true)
    }
    else{
        fetchUser(username)
        fetchPost(username)
        setIsProfile(false)
        
    }
    setTimeout(() => {
        setIsLoading(!isLoading)
      }, 500);  
    },[])

    return (
        <>
        {
            isLoading? 

            <Loading/>
            :
            <>
            <Navbar user={userSelector} />
                 <Box bgColor={"#FAFAFA"}  minW={975} minH={"100vh"}>
            <Center gap={10} paddingY={"10"} >
                <Flex flexDir={"column"} alignSelf="baseline" minW={975}
                px="20px" py="20px">
                    <Profile user={user} posts={posts} isprofile={isProfile} />
                </Flex>
            </Center>
            </Box>
        
                </>
        }
       </>
    )
}