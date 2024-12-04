import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          {/* Copyright Section */}
          <Text fontSize="sm">Syed Rahmat Ullah • © 2024</Text>
          
          {/* Social Links */}
          <Flex>
            <Link
              href="https://www.linkedin.com/in/syedrahmatullah"
              isExternal
              mx={2}
              color="white"
              _hover={{ color: "#00bcd4", textDecoration: "underline" }}
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/rahmat131"
              isExternal
              mx={2}
              color="white"
              _hover={{ color: "#00bcd4", textDecoration: "underline" }}
            >
              GitHub
            </Link>
            <Link
              href="mailto: rahmatdevs131@gmail.com"
              mx={2}
              color="white"
              _hover={{ color: "#00bcd4", textDecoration: "underline" }}
            >
              Email
            </Link>
          </Flex>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
