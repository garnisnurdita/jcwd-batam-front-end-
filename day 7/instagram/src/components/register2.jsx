import { Input,Box,Button,Flex,Image, Divider,Text,Icon, Alert,AlertIcon, Center } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import InstagramLogo from "../assets/Instagram_logo.svg.png"
import { AiFillFacebook } from "react-icons/ai"
import { axiosInstance } from "../config/config";
import { useState } from "react";
import user_types from "../redux/auth/types";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Register2() {
    const dispatch = useDispatch();

    let navigate = useNavigate()
    const [user, setUser] = useState({
        id: 0,
        username : "",
        password : "",
        email : "",
        name : "",
        avatar_url: "",
        desc: ""
    })

    const [disabled, setDisabled] = useState(true)

    async function signUp() {
        const res =  await axiosInstance.post("/users/", user)

        const userData = res.data;

        if(userData) 
       { dispatch({
            type: user_types.USER_LOGIN,
            payload: userData
        })
        
        localStorage.setItem("user_data", JSON.stringify(userData))
       return navigate("/",{ state : { user :res.data[0] }, replace: true }) 
        
        }
    //   return  setStatus(true)
        

    }

    function inputHandler(event) {
        const {name,value} = event.target

        setUser({
            ...user,
            [name] : value
        })

       
    }

    useEffect(()=>{
        if(user.name && user.email && user.password && user.username) { 
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }

    },[user])

    return (
        <>
        <Flex flexDir="column" gap={7}>
        <Box>
        <Flex py={2} paddingBottom={10} gap="2" alignItems={"center"} flexDir="column"  borderWidth={"2px"} w="350px" 
        fontSize="sm" 
        >
        <Box>
        <Image mt={"10"} src={InstagramLogo} h={"auto"} w={"200px"} maxW={"200px"}></Image>
        </Box>



            <Text maxW={268} textAlign="center" fontSize={"lg"}>
            Sign up to see photos and videos from your friends.
            </Text>

            <Button w={268}  bgColor="#0095F6" color={"white"}>
        <Icon  boxSize={6} as={AiFillFacebook} marginRight="1" />   Log in with Facebook
        </Button>

        <Flex w={268} h="36px" alignItems={"center"} gap="4">
            <Divider orientation="horizontal"/>
            <Text color={"GrayText"} fontWeight={"light"} >OR</Text>
            <Divider orientation="horizontal"/>
            </Flex>

            <Input name="email" onChange={inputHandler}  fontSize="sm"  w={268} h="36px"  placeholder="Mobile Number or Email" />
            <Input name="name" onChange={inputHandler}  fontSize="sm" w={268} h="36px" placeholder="Full Name"/>
            <Input name="username" onChange={inputHandler}  fontSize="sm" w={268} h="36px" placeholder="Username" />
            <Input name="password" onChange={inputHandler}  fontSize="sm" w={268} h="36px" placeholder="Password" type={"password"}/>

            <Text maxW={268} textAlign="center" fontSize={"sm"}>
            People who use our service may have uploaded your contact information to Instagram.
            <Link color="blue" to="//facebook.com">
                <Text display={"inline"} marginLeft={1} color="blue">
                Learn More

                </Text>

            </Link>
            </Text>

            
            <Text maxW={268} textAlign="center" fontSize={"sm"}>
            By signing up, you agree to our
            <Link color="blue" to="//facebook.com">
                <Text display={"inline"} mx={1} color="blue">
                Terms , Privacy Policy 
                </Text>

            </Link>
             and 

             <Link color="blue" to="//facebook.com">
                <Text display={"inline"} mx={1} color="blue">
                Cookies Policy 
                </Text>
                .
            </Link>
             
            </Text>

            <Button disabled={disabled? "disabled" : null} fontSize="sm" onClick={signUp}  w={268} h="36px" bgColor="#0095F6" color={"white"} >Sign up</Button>
           
            
        </Flex>
            
        </Box>

        <Button bgColor={"#FAFAFA"} borderRadius="0" variant="unstyled" 
        borderWidth="2px" fontSize={"sm"}  
        cursor={"default"}
        fontWeight="light"
        w={"100%"}>Have an account?  <Link to={"/login"} > <Text display={"inline"} fontWeight="bold" color="#0095F6">Log in</Text></Link></Button>
        </Flex>

        <Center marginTop={5} flexDir="column" gap={3} w={350}>
        Get the app.

        <Flex gap={3}  >
            <Image w={"134px"} h={"40px"} src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"></Image>
            <Image w={"134px"} h={"40px"}  src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"></Image>
        </Flex>



        </Center>
     
         
        </>

    ) 
}