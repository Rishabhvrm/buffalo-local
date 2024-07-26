import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";

import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export function Repo(props) {
  const { isListView, org } = props;

  return (
    <Flex
      w={"320px"}
      h={"450px"}
      borderWidth={1}
      p={"0%"}
      bg={"white"}
      mb={"2%"}
      overflow="hidden" // Hide overflowing content
      rounded={"md"}
    >
      <Flex flex={1} flexDir={"column"} overflow="hidden">
        <Link href={org.website_url} target="_blank">
          <Image
            // src={`${process.env.REACT_APP_UI_URL}${org.image_url}`}
            src={org.image_url}
            w={"100%"}
            h={"200px"}
            objectFit={"cover"}
            roundedTop={"md"}
            mb={"2%"}
          />
        </Link>

        <Box overflowY={"auto"}>
          <Box p={"3%"} backgroundColor={"gray.50"}>
            <Heading color={"blue.700"} fontSize={"100%"}>{org.name}</Heading>
            <Text color={"blue.800"} fontSize={"80%"}>{org.type}</Text>
            <Text color={"blue.800"} fontSize={"80%"}>{org.address}</Text>
          </Box>

          <Box p={"3%"}>
            <Heading color={"blue.700"} mt={"3%"} fontSize={"90%"} >
              Description
            </Heading>
            <Text color={"blue.800"} mb={"1%"} fontSize={"70%"}>
              {org.description}
            </Text>
          </Box>
        </Box>

        <Stack
          bg={"white"}
          justifyContent={"space-between"}
          direction={{ base: "column", md: "row" }} 
          // direction={"row"}
          mt={"auto"}
          rounded={"md"}
          p={"2%"}
        >
          <Button
            p={"1%"}
            cursor="pointer"
            as="a"
            variant={"link"}
            href={org.website_url}
            target="_blank"
            fontSize={"60%"}
            iconSpacing={"5px"}
            leftIcon={<MdEmail />}
            _hover={{ textDecor: "none" }}
          >
            {org.email}
          </Button>
          <Button
            p={"1%"}
            as="a"
            variant={"link"}
            href={org.website_url}
            target="_blank"
            fontSize={"70%"}
            iconSpacing={"5px"}
            leftIcon={<IoCall />}
            _hover={{ textDecor: "none" }}
          >
            {org.phone}
          </Button>
        </Stack>
      </Flex>
      {isListView && (
        <Image
          src={org.image_url}
          w={"100%"}
          h={"150px"}
          rounded={"md"}
          p={"0px"}
        />
      )}
    </Flex>
  );
}
