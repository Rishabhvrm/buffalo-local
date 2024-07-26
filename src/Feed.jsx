import React, { useState } from "react";
import { Box, Flex, Button, SimpleGrid } from "@chakra-ui/react";

import { PageHeader } from "./components/PageHeader";
import { GroupTitle } from "./components/GroupTitle";
import { Filters } from "./components/Filters";
import { Repo } from "./components/Repo";
import org from "./data/org.json";
import classes from "./Feed.module.css";

export function Feed() {
  const [viewType, setViewType] = useState();
  return (
    <Box maxWidth="1200px" mx="auto">
      <PageHeader />

      {/* <Flex
        justifyContent="space-between"
        bg="gray.500"
        alignItems="center"
        mb={"25px"}
        pt={"40px"}
        px={"2%"}
      > */}

      <Flex justifyContent={"space-between"} mx={"1%"} py={"1%"}>
        <GroupTitle />
        <Filters
          onViewChange={(viewType) => {
            // console.log(`Inside the Feed: ${viewType}`);
            setViewType(viewType);
          }}
        />
      </Flex>

      {/* <SimpleGrid columns={viewType === "list" ? 1 : 3} spacing={8}> */}
      <SimpleGrid
        minChildWidth={"300px"}
        maxW="1200px"
        spacing={5}
        columns={{ base: 1, sm: 3, md: 3, lg: 3 }}
        justifyContent={"center"}
        mx={"auto"}
        p={"1%"}
      >
        {org.map((org) => (
          <Box p={"3%"}>
            <Repo isListView={viewType === "list"} org={org} />
            {/* <Repo isListView={viewType === "list"}/> */}
          </Box>
        ))}
      </SimpleGrid>

      {/* <Flex alignItems={"center"} justifyContent={"center"} my={"20px"}>
        <Button variantColor="teal">Load More</Button>
      </Flex> */}
    </Box>
  );
}
