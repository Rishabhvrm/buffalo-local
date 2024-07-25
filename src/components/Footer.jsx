import React from "react";
import { Box, Text, Link, Stack, Divider } from '@chakra-ui/react';

export function Footer() {
    return(
        <Box
        as="footer"
        role="contentinfo"
        py={6}
        px={{ base: 4, md: 8 }}
        
        mx={"5%"}
        textAlign="center"
      >
        <Divider borderColor="blue.900" mb={4} />
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="space-between" align="center">
          <Text>&copy; {new Date().getFullYear()} &nbsp; Made with ❤️</Text>
          <Stack direction="row" spacing={6}>
            <Link href="#about" color="blue.900">About Us</Link>
            {/* <Link href="#services" color="teal.400">Services</Link> */}
            <Link href="#contact" color="blue.900">Contact</Link>
          </Stack>
        </Stack>
      </Box>
    );
}