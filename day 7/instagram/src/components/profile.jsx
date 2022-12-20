import { Avatar, Button, Flex, Icon, Text, Center, Image, Grid, GridItem } from "@chakra-ui/react";
import { SlSettings } from "react-icons/sl"
import { BsGrid3X3, BsBookmark } from "react-icons/bs"
import { MdOutlineOndemandVideo } from "react-icons/md"
import { BiUserPin, BiDotsHorizontalRounded } from "react-icons/bi"
import { SlCamera } from "react-icons/sl"
import { MdSupervisorAccount } from "react-icons/md"



export default function Profile(props) {

 
    return (
        <>     
        <Flex my={5} gap={10} bgColor="#FAFAFA"  >
            <Center h={224}  w={292}>
            <Avatar src={props.user?.avatar_url} size={"2xl"}></Avatar>
            </Center>
           
            <Flex flexDir={"column"} gap={3}  > 
           
            {
                props.isprofile ?
                <Flex gap={2} py={2}
             alignItems={"center"} wrap={"wrap"} >
                <Text mt={"-3"} fontWeight={"hairline"} fontSize={"28px"}>{props.user?.username} </Text>
                <Button  border="1px solid grey" bgColor={"#FAFAFA"} variant={"unstyled"} width="89px" h="7" fontSize="sm">Edit profile</Button>
                <Button border="1px solid grey" bgColor={"#FAFAFA"} variant={"unstyled"} width="89px" h="7" fontSize="sm">Add tools</Button>
                <Icon boxSize={"5"} as={SlSettings} sx={{
            _hover: {
              cursor: "pointer",
            },
          }} ></Icon>

            </Flex> 
            :
            <Flex gap={2} py={2}
             alignItems={"center"} wrap={"wrap"} >
                <Text mt={"-1"} fontWeight={"hairline"} fontSize={"28px"}>{props.user?.username} </Text>
                <Button  bgColor={"#0095F6"} color="white" variant={"unstyled"} width="70px" h="30px" fontSize="14px">Follow</Button>
                <Button border="1px solid grey" bgColor={"#FAFAFA"} variant={"unstyled"} width="70px" h="30px" fontSize="14px">Message</Button>
                <Icon boxSize={"5"} as={MdSupervisorAccount} sx={{
            _hover: {
              cursor: "pointer",
            },
          }} ></Icon>
                <Icon boxSize={"5"} as={BiDotsHorizontalRounded} sx={{
            _hover: {
              cursor: "pointer",
            },
          }} ></Icon>

            </Flex>
            }
            <Flex  flexWrap={"wrap"} justifyContent="space-between" fontSize={"md"} maxW={300}>
            <Text   > <Text fontWeight={"semibold"} display="inline"> {props?.posts.length} </Text>  posts</Text>
            <Text sx={{
                    _hover: {
                      cursor: "pointer",
                    },
                  }} fontSize={"md"}><Text fontWeight={"semibold"} display="inline"> 679 </Text>  followers</Text>
            <Text  fontSize={"md"} sx={{
                    _hover: {
                      cursor: "pointer",
                    },
                  }}>
            <Text fontWeight={"semibold"} display="inline"> 512 </Text>  following</Text>
            </Flex>

            <Text maxH={"120px"} maxW={350} fontWeight="thin">
            <Text  fontWeight={"semibold"} display="block">{props.user?.name}</Text>
                {props.user?.desc}
            </Text>


            </Flex>
        </Flex>
        
        <Flex  flexDir={"column"}  gap={5}  maxW={935}>
            <Center flexWrap={"wrap"}  fontSize={"sm"} flexDir="row" 
             borderTopWidth="1px">
           
           
           <Center gap={1} fontWeight="semibold"  sx={{
            _hover: {
              cursor: "pointer",
            },
          }} borderTopWidth="1px" borderColor={"black"}  h="52px" w="52px" marginRight={6}>
           <Icon as={BsGrid3X3} boxSize={3} />
           <Text>POSTS</Text>
            </Center> 


            <Center gap={1}  sx={{
            _hover: {
              cursor: "pointer",
            },
          }}  h="52px" w="52px" marginRight={6}>
           <Icon as={MdOutlineOndemandVideo} boxSize={3} /><Text>REELS</Text>
            </Center> 

            
            <Center gap={1}  sx={{
            _hover: {
              cursor: "pointer",
            },
          }}  h="52px" w="52px" marginRight={6}>
           <Icon as={BsBookmark} boxSize={3} />   <Text>SAVED</Text>
            </Center> 

            <Center gap={1}  sx={{
            _hover: {
              cursor: "pointer",
            },
          }}    h="52px" w="52px" marginRight={6}>
           <Icon as={BiUserPin} boxSize={3} />   <Text>TAGGED</Text>
            </Center> 
            </Center>

{
    props.posts.length? 
<Grid templateColumns='repeat(3, 1fr)' gap={6}>       
       {props.posts.map((val) => {
        return (
            <GridItem maxW={293} maxH={293}>
            <Image src={val?.image_url}
             objectFit="cover"
             width="100%"
             height="100%"
             sx={{
                _hover: {
                  cursor: "pointer",
                },
              }}/>
              </GridItem>
        )
       })}
     </Grid>
    :
    <Center minH={"2xs"} flexDir="column" gap={1}>
        <Icon boxSize={"62px"} as={SlCamera} ></Icon>
        <Text fontSize={"2xl"} fontWeight="thin">No Post Yet</Text>
    </Center>
}
        </Flex>
        </>
    )
}