import { Avatar, Box, Flex,Text } from "@chakra-ui/react";

export default function SideBar(props) {
return (<>
<Flex
 paddingY={10} marginY={4} 
 maxW={319}
 minW={300}
 flexDir="column"
 gap={4}
>

<Flex  
   
    justifyContent="space-between"
    >
        <Flex gap={5}>
        <Avatar size={"md"} src="data:image/jpeg;base64,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"></Avatar>
        <Flex flexDir={"column"}>
        <Text fontWeight={"bold"} fontSize="sm"> jordan.ongg </Text>
        <Text fontSize="sm"  color={"#8E8E8E"}> Jordan </Text>

        </Flex> 
        </Flex>

        <Flex wrap={"wrap"} alignContent="center">
        <Text color={"#0095F6"} fontSize="12px">Switch</Text>
        </Flex>
</Flex>

    <Flex justifyContent={"space-between"} pt="2">
    <Text fontWeight={"semibold"} color="#8E8E8E" fontSize={"sm"}>Suggestion For You</Text>
    <Text fontSize={"sm"}>See All</Text>
    </Flex>


    <Flex justifyContent="space-between">
        <Flex gap={3}>
        <Avatar size={"sm"} src="https://preview.redd.it/pwtbfq4e4c5a1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=fd470aab18d91b5798c799a4c05404d742a4a12d"></Avatar>
        <Flex flexDir={"column"}>
        <Text fontWeight={"bold"} fontSize="sm"> albert.a </Text>
        <Text fontSize="sm"  color={"#8E8E8E"}> Followed by mr.beast + 2 more </Text>

        </Flex> 
        </Flex>
        <Flex wrap={"wrap"} alignContent="center">
        <Text color={"#0095F6"} fontSize="12px">Follow</Text>
        </Flex>
    </Flex>

    <Flex justifyContent="space-between">
        <Flex gap={3}>
        <Avatar size={"sm"} src="https://preview.redd.it/pwtbfq4e4c5a1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=fd470aab18d91b5798c799a4c05404d742a4a12d"></Avatar>
        <Flex flexDir={"column"}>
        <Text fontWeight={"bold"} fontSize="sm"> albert.a </Text>
        <Text fontSize="sm"  color={"#8E8E8E"}> Followed by mr.beast + 2 more </Text>

        </Flex> 
        </Flex>
        <Flex wrap={"wrap"} alignContent="center">
        <Text color={"#0095F6"} fontSize="12px">Follow</Text>
        </Flex>
    </Flex>
    <Flex justifyContent="space-between">
        <Flex gap={3}>
        <Avatar size={"sm"} src="https://preview.redd.it/pwtbfq4e4c5a1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=fd470aab18d91b5798c799a4c05404d742a4a12d"></Avatar>
        <Flex flexDir={"column"}>
        <Text fontWeight={"bold"} fontSize="sm"> albert.a </Text>
        <Text fontSize="sm"  color={"#8E8E8E"}> Followed by mr.beast + 2 more </Text>

        </Flex> 
        </Flex>
        <Flex wrap={"wrap"} alignContent="center">
        <Text color={"#0095F6"} fontSize="12px">Follow</Text>
        </Flex>
    </Flex>
    <Flex justifyContent="space-between">
        <Flex gap={3}>
        <Avatar size={"sm"} src="https://preview.redd.it/pwtbfq4e4c5a1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=fd470aab18d91b5798c799a4c05404d742a4a12d"></Avatar>
        <Flex flexDir={"column"}>
        <Text fontWeight={"bold"} fontSize="sm"> albert.a </Text>
        <Text fontSize="sm"  color={"#8E8E8E"}> Followed by mr.beast + 2 more </Text>

        </Flex> 
        </Flex>
        <Flex wrap={"wrap"} alignContent="center">
        <Text color={"#0095F6"} fontSize="12px">Follow</Text>
        </Flex>
    </Flex>


    <Text pt={4} fontWeight={"thin"} color="#C7C7C7" fontSize={"12px"} >
    © 2022 INSTAGRAM FROM META

    </Text>

    </Flex>

</>)
}