import { Avatar, Box,Text, Image, AspectRatio, Icon,Input,Button, Divider } from "@chakra-ui/react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";

export default function ContentCard() {

    return ( <>
    <Box  borderWidth={"1px"}
    paddingY={2} marginY={4} 
    maxW={475}
    minW={470}
    borderRadius={10}
    >
        <Box paddingX={3} paddingBottom={2} display={"flex"} alignItems={"center"}
        
        >
        <Avatar size={"md"}></Avatar>
        <Box marginLeft={2}>
            <Text fontSize={"md"} fontWeight={"bold"}>jordan.ongg</Text>
            <Text fontSize={"sm"} color={"GrayText"}>Batam</Text>
        </Box>
        </Box>
       <AspectRatio ratio={1} >
       <Image src="https://imageio.forbes.com/specials-images/imageserve/62278bc6897b081d1eef49ea/2022-BMW-i4-coup--electric-car/960x0.jpg?format=jpg&width=960" />
       </AspectRatio>

       <Box paddingX="3" paddingY="2" display="flex" alignItems="center">
        <Icon boxSize={6} as={FaRegHeart} />
        <Icon
          marginLeft="4"
          boxSize={6}
          as={FaRegComment}
          sx={{
            _hover: {
              cursor: "pointer",
            },
          }}
        />
        <Icon>
            as={IoPaperPlaneOutline}
        </Icon>
      </Box>

      <Box paddingX="3">
        <Text fontWeight="bold">100 likes</Text>
      </Box>

      {/* Caption */}
      <Box paddingX="3" pb={1} >
        <Text display="inline" fontWeight="bold" marginRight="1">
          jordan
        </Text>
        <Text display="inline"> nice car with a view </Text>
      </Box>
      <Divider orientation='horizontal' />
            <Box display="flex">
            <Input
            marginTop={1}
              marginBottom="2"
              marginLeft="4"
              type="text"
              placeholder="Add a Comment"
              marginRight="4"
              variant='unstyled'
            />
            <Button colorScheme={"white"} color={"#0095f6"}>
              Post
            </Button>
          </Box>

       
    </Box>
    
    </>) 
}