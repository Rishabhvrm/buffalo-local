import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Feed } from "./Feed";
import { Footer } from "./components/Footer";


export function App() {
  return (
      // <Box width="100vw" height="100vh" bg="gray.600" > 
       <Box width="100%" height="100%" bg="gray.200" py={"30px"} px={"20px"}> 
        <Feed />
        <Footer />
      </Box>
  );
}