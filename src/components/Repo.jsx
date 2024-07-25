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
import {
  FaPhone,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";

export function Repo(props) {
  const { isListView, org } = props;

  return (
    <Flex borderWidth={1} p={"0%"} bg={"white"} mb={"2%"} rounded={"md"}>
      <Flex flex={1} flexDir={"column"}>
        <Image
          // src={`${process.env.REACT_APP_UI_URL}${org.image_url}`}
          src={`${org.image_url}`}
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
          rounded={"md"}
          mb={"2%"}
        />

        <Box mx={"2%"} my={"2%"}>
          <Heading fontSize={"100%"}>{org.name}</Heading>
          <Text fontSize={"100%"}>{org.type}</Text>
          <Text fontSize={"100%"}>{org.address}</Text>
          <Heading mt={"3%"} fontSize={"1em"}>
            Description
          </Heading>
          <Text mb={"1%"} color="gray.500">
            {org.description}
          </Text>
        </Box>

        <Stack
          bg={"white"}
          justifyContent={"space-between"}
          direction={"row"}
          mt={"auto"}
          rounded={"md"}
        >
          <Button
            p={"1%"}
            cursor="pointer"
            as="a"
            variant={"link"}
            href="https://gmail.com"
            target="_blank"
            fontSize={"0.8em"}
            iconSpacing={"4px"}
            leftIcon={<CgMail />}
            _hover={{ textDecor: "none" }}
          >
            {org.email}
          </Button>
          <Button
            p={"1%"}
            as="a"
            variant={"link"}
            href="https://github.com"
            target="_blank"
            fontSize={"0.8em"}
            iconSpacing={"4px"}
            leftIcon={<FaPhone />}
            _hover={{ textDecor: "none" }}
          >
            {org.phone}
          </Button>
        </Stack>
      </Flex>
      {isListView && (
        <Image
          src={`${process.env.REACT_APP_UI_URL}${org.image_url}`}
          h={"100%"}
          w={"10%"}
          rounded={"md"}
          p={"0px"}
        />
      )}
    </Flex>
  );
}
