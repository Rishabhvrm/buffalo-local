import React from "react";
import { Button, Flex, Icon, Stack } from "@chakra-ui/react";
import {
  FaBook,
  FaChrome,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Brand } from "./Brand";
import classes from "./PageHeader.module.css";

export function PageHeader() {
  return (
    <Flex justifyContent="space-between" alignItems="center" pt={"15px"} backgroundColor={"gray.200"}>
      <Brand></Brand>
      <div className={classes.container}>
        <Button
          cursor="pointer"
          as="a"
          variant={"link"}
          href={"https://motherearthliteracies.com/"}
          target="_blank"
          _hover={{ textDecor: "none" }}
          leftIcon={<FaHome />}
        >
          Mother Earth
        </Button>
        <Button
          cursor="pointer"
          as="a"
          variant={"link"}
          href={"https://facebook.com/"}
          target="_blank"
          _hover={{ textDecor: "none" }}
        >
          <Icon as={FaFacebook} />
        </Button>

        <Button
          cursor="pointer"
          as="a"
          variant={"link"}
          href={"https://instagram.com/"}
          target="_blank"
          _hover={{ textDecor: "none" }}
        >
          <Icon as={FaInstagram} />
        </Button>
      </div>
    </Flex>
  );
}
