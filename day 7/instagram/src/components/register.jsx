import { Input,Box,Button,Flex,Image, Divider,Text,Icon, FormControl, FormHelperText } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import InstagramLogo from "../assets/Instagram_logo.svg.png"
import { AiFillFacebook } from "react-icons/ai"
import { axiosInstance } from "../config/config";
import { useState } from "react";
import * as Yup from "yup";
import YupPassword from 'yup-password';
import { useEffect } from "react";
import { useFormik } from "formik";

export default function Register() {
    YupPassword(Yup);

    const [enable,setEnable] = useState(false);

    const formik = useFormik({
        initialValues : {
            id: 0,
            email: "",
            username: "",
            password: "",
            name: "",
            avatar_url: "",
            desc: ""
        } ,
        validationSchema : Yup.object().shape({
            email: Yup.string().email("ini bukan email"),
            username: Yup.string().min(10, "min 10")
            .minLowercase(1,"min 1 huruf kecil").minUppercase(1,"min 1 huruf besar"),
            name: Yup.string().min(3, "min 3 huruf"), 
            password : Yup.string().minLowercase(1,"min 1 huruf kecil")
            .minUppercase(1,"min 1 huruf besar").min(4, "min 5 digit"),
        }),
        onSubmit: ( async ()=> {
            // alert("test")
            const res =  await axiosInstance.post("/users/", formik.values)
            if(res.status=== 201)
            navigate("/login",{ replace: true }) 
        })
    })
    // formik.values.email; 
    // formik.setFieldValue("email", e.target.value)

    // const formik = useFormik({
    //     initialValues: {
    //         id: 0,
    //         username : "",
    //         password : "",
    //         email : "",
    //         name: "",
    //         avatar_url: "",
    //         desc:""
    //     },
    //     validationSchema: Yup.object().shape({
    //       email: Yup.string()
    //         .email("Format email tidak tepat")
    //         .required("Email tidak sesuai"),
    //       password: Yup.string()
    //         .required("password harus diisi")
    //         .minLowercase(1, 'password must contain at least 1 lower case letter')
    //         .minUppercase(1, 'password must contain at least 1 upper case letter')
    //         .minNumbers(1, 'password must contain at least 1 number')
    //         .minSymbols(1, 'password must contain at least 1 special character'),
    //         // .matches(
    //         //   "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$",
    //         //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    //         // ),
    //       username: Yup.string().required("username tidak boleh kosong"),
    //       name: Yup.string().required("nama tidak boleh kosong"),
    //     }),
    //     validateOnChange: false,
    //     // onSubmit: (values) => {
    //     //   dispatch(userRegister(values, formik.setSubmitting));
    //     // },
    //   });

    let navigate = useNavigate()
    // const [user, setUser] = useState({
    //     id: 0,
    //     username : "",
    //     password : "",
    //     email : "",
    //     name: "",
    //     avatar_url: "",
    //     desc:""
    // })

    // async function Submit() {
    //     const res =  await axiosInstance.post("/users/",user)
    //     if(res.status=== 201)
    //     navigate("/login",{ replace: true }) 
    //     }

    // function inputHandler(event) {
    //     const {name,value} = event.target
    //     setUser({
    //         ...user,
    //         [name] : value
    //     })
    // }

    useEffect(()=> {
    let { name,email,password,username } = formik.values 
    if(name && email && password && username){
            setEnable(true)
        }
    else{
            setEnable(false)
    }
    },[formik.values])

    return (
        <>
        <Flex flexDir="column" gap={7}>
        <Box>
        <Flex py={2} gap="2" alignItems={"center"} flexDir="column"  borderWidth={"2px"} w="350px" 
        fontSize="sm" 
        >
        <Box>
        <Image mt={"2"}  src={InstagramLogo} h={"auto"}  w={"268px"} maxW={"268px"}></Image>
        </Box>

        <Text fontSize={"md"} textAlign={"center"}  w={"268px"} fontWeight="semibold" color={"#8E8E8E"}>
        Sign up to see photos and videos from your friends.
        </Text>
        <Link to={"//www.facebook.com"} >

        <Button  fontSize="sm" color="white" bgColor={"#0095F6"} w={"268px"} h="36px" gap={2} >
        <Icon  boxSize={6} as={AiFillFacebook} /> 
        Log in with Facebook
        </Button>
        </Link>

            <Flex w={"268px"} h="36px" alignItems={"center"} gap="4">
            <Divider orientation="horizontal" />
            <Text color={"#8E8E8E"} fontWeight={"light"} >OR</Text>
            <Divider orientation="horizontal"/>
            </Flex>
            <Flex flexDir={"column"} gap={2}>
           <FormControl>
           <Input name="email" onChange={(e)=> formik.setFieldValue("email", e.target.value )} type="email"   fontSize="sm"  w={"268px"} h="36px"  placeholder="Email" />
           <FormHelperText  w={"268px"} >
            {formik.errors.email}
            {/* Enter the email you'd like to receive the newsletter on. */}
            </FormHelperText>
           </FormControl>

           <FormControl>
           <Input name="name" onChange={(e)=> formik.setFieldValue("name", e.target.value )} fontSize="sm"  w={"268px"} h="36px"  placeholder="Name" />
           <FormHelperText  w={"268px"} paddingX="1"  >
           {formik.errors.name}

            {/* Enter the email you'd like to receive the newsletter on. */}
            </FormHelperText>
           </FormControl>

           <FormControl>
           <Input name="username" onChange={(e)=> formik.setFieldValue("username", e.target.value )}  fontSize="sm"  w={"268px"} h="36px"  placeholder="Username" />
           <FormHelperText  w={"268px"}  >
           {formik.errors.username}

            {/* Enter the email you'd like to receive the newsletter on. */}
            </FormHelperText>
           </FormControl>

           <FormControl>
           <Input name="password" onChange={(e)=> formik.setFieldValue("password", e.target.value )}  fontSize="sm" w={"268px"} h="36px" placeholder="Password" type={"password"}/>
           <FormHelperText  w={"268px"} >
           {formik.errors.password}
            {/* Enter the email you'd like to receive the newsletter on. */}
            </FormHelperText>
           </FormControl>


            
            </Flex>
            <Flex gap={1} flexDir="column">

            <Text color={"#8E8E8E"} fontSize={"xs"} maxWidth="268px">
            People who use our service may have uploaded your contact information to Instagram. 
            <Link > 
            <Text paddingLeft={1} display={"inline"} color="#00376B" >
             Learn More
            </Text>
             </Link> 
            </Text>

            <Text color={"#8E8E8E"} fontSize={"xs"} maxWidth="268px">
            By signing up, you agree to our
            <Link > 
            <Text paddingX={1} display={"inline"} color="#00376B" >
            Terms , Privacy Policy
            </Text>
             </Link> 
              and 
              <Link > 
            <Text paddingLeft={1} display={"inline"} color="#00376B" >
            Cookies Policy .
             </Text>
             </Link> 
              
            </Text>

            </Flex>

           
           
           
            <Button my={"6"}  fontSize="sm" 
            onClick={formik.handleSubmit}
             disabled={enable? null : "disabled"}
             color="white" bgColor={"#0095F6"}
              w={"268px"} h="36px" >Sign up</Button>

        </Flex>
        </Box>

        <Button bgColor={"#FAFAFA"} borderRadius="0" variant="unstyled" 
        borderWidth="2px" fontSize={"sm"}  
        cursor={"default"}
        fontWeight="light"
        w={"100%"}>Have an account? <Link to={"/login"} > <Text display={"inline"} fontWeight="bold" color="#0095F6">Log in</Text></Link></Button>
        </Flex>
     
         
        </>

    ) 
}