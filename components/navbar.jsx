import {
  Flex,
  Box,
  Link,
  IconButton,
  Image,
  Container,
  Divider,
  Text,
} from "@chakra-ui/react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import HamburgerMenu from "./ui/hamburgerMenu";

const Navbar = () => {
  return (
    <Flex as="nav" align="center" bg="white" justify="space-between" py={3}>
      <Container maxW="1200px" mx="auto">
        <Flex align="center" justify="space-between" width="100%">
          <Flex align="center" gap={{ base: "2", sm: "0" }} width="100%">
            <HamburgerMenu />
            <Link
              href="/"
              _hover={{ textDecoration: "none", color: "inherit" }}
              ml={{ base: "auto", md: "0" }}
              order={{ base: 2, md: 1 }}
              width="full"
            >
              <Box textAlign="center" fontFamily="Ruda">
                <Text
                  fontSize={{ base: "lg", md: "3xl" }}
                  fontWeight="bold"
                  color="#090D1D"
                >
                  Studio Legale Agovino Monteforte
                </Text>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mt={1}
                >
                  <Divider
                    width={{ base: "10%", md: "20%" }}
                    borderColor="#2D4496"
                  />
                  <Text
                    mx={3}
                    fontSize={{ base: "lg", md: "xl" }}
                    color="#2D4496"
                  >
                    Avvocati di Fiducia
                  </Text>
                  <Divider
                    width={{ base: "10%", md: "20%" }}
                    borderColor="#2D4496"
                  />
                </Box>
              </Box>
            </Link>
          </Flex>

          <Flex align="center" gap={5}>
            <Flex align="center" display={{ base: "none", md: "flex" }} gap={5}>
              <IconButton
                bg="#2D4496"
                icon={<FaEnvelope fontSize="30px" />}
                borderRadius="50%"
                mx={1}
                color="white"
                boxSize="60px"
                colorScheme="blue"
              />
              <IconButton
                bg="#25D366"
                icon={<FaWhatsapp fontSize="30px" />}
                borderRadius="50%"
                mx={1}
                color="white"
                boxSize="60px"
                colorScheme="green"
              />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
