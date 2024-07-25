import React from "react";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";

export function Brand() {
  return (
    <Flex alignItems="center" mb={"2%"}>
      <Image 
      src={`${process.env.REACT_APP_UI_URL}/assest/images/buffalo-2.jpeg`}
      alt="logo" width="20%" height="20%" rounded={"full"}/>
      <Box ml="5%" >
        <Heading color="blue.900">Buffalo Local</Heading>
        <Text color="blue.800">Your Home Community</Text>
      </Box>
    </Flex>
  );
}
