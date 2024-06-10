import {
  Flex,
  Box,
  Divider,
  Container,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      as="footer"
      bg="#090D1D"
      color="white"
      pt={{ base: "8", md: "5" }}
      pb={{ base: "8", md: "10" }}
      w="100%"
    >
      <Container maxW="1200px" mx="auto">
        <Flex
          direction={{ base: "column", md: "row" }}
          wrap="wrap"
          align="center"
          justify="space-between"
        >
          {/* Additional Information */}
          <Flex
            direction={{ base: "column", sm: "row" }}
            justify="space-between"
            alignItems={{ base: "center", sm: "flex-start" }}
            my={5}
            w="100%"
          >
            <VStack
              align={{ base: "center", sm: "flex-start" }} 
              textAlign={{ base: "center", sm: "left" }} 
              spacing={2}
              w={{ base: "100%", md: "auto" }}
            >
              <Text>Sede di Cosenza</Text>
              <Text>87100 - Piazza Gullo, 5</Text>
              <Text>Email: ....</Text>
              <Text>PEC: ....</Text>
            </VStack>
            <VStack
              align={{ base: "center", sm: "flex-end" }}
              textAlign={{ base: "center", sm: "right" }}
              spacing={2}
              mt={{ base: 5, sm: 0 }}
              w={{ base: "100%", md: "auto" }}
            >
              <Link href="#">Política de privacidad</Link>
              <Link href="#">Política de cookies</Link>
              <Link href="#">Diseñado por Neomedi Analytica</Link>
            </VStack>
          </Flex>

          {/* Brand Logo and Socials */}
          <Flex justifyContent="space-between" w="100%" alignItems="center" mt={5}>
            <Flex align="center" gap={10} w="full" direction={{base: 'column', md: 'row'}}>
              <Link href="/" _hover={{ textDecoration: 'none', color: 'inherit' }}>
                <Box textAlign="center" fontFamily="Ruda">
                  <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="bold" color="white">
                    Studio Legale Agovino Monteforte
                  </Text>
                  <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
                    <Divider width="20%" />
                    <Text mx={3} fontSize="lg" color="#B9D0FF">
                      Avvocati di Fiducia
                    </Text>
                    <Divider width="20%" />
                  </Box>
                </Box>
              </Link>
              <Flex align="center" gap={5} mx={{base: 'auto', md: '0'}} ml={{md:'auto'}}>
                <FaEnvelope size="1.5rem" />
                <FaWhatsapp size="1.5rem" />
                <FaFacebook size="1.5rem" />
                <FaInstagram size="1.5rem" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Footer;