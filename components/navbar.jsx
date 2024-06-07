import {
  Flex,
  Box,
  Link,
  IconButton,
  Image,
  Container,
} from "@chakra-ui/react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import HamburgerMenu from "./ui/hamburgerMenu";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      bg="white"
      justify="space-between"
      py={4}
    >
      <Container maxW="1200px" mx="auto">
        <Flex align="center" justify="space-between" width="100%">
          <Flex align="center" gap="10">
            <HamburgerMenu />
            <Link href="/">
              <Image
                src="/images/brand.png"
                alt="Brand Logo"
                h={{ base: "40px", sm: "60px" }}
                ml={2}
              />
            </Link>
          </Flex>

          <Flex align="center" gap={5}>
            <Flex align="center" display={{ base: "none", lg: "flex" }} gap={5} fontFamily='roboto'>
              <Link href="/noi">
                <Box mx={2}>Chi Siamo</Box>
              </Link>
              <Link href="/servizi">
                <Box mx={2}>I nostri servizi</Box>
              </Link>
            </Flex>
            <Flex align="center" display={{ base: "none", md: "flex" }} gap={5}>
              <IconButton
                bg="#2D4496"
                icon={<FaEnvelope fontSize="30px" />}
                borderRadius="50%"
                mx={1}
                color="white"
                boxSize="60px"
              />
              <IconButton
                bg="#25D366"
                icon={<FaWhatsapp fontSize="30px" />}
                borderRadius="50%"
                mx={1}
                color="white"
                boxSize="60px"
              />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
