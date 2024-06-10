"use client";

import { Box, Flex, Container, Text, Image, Heading } from "@chakra-ui/react";
import FadeInFrom from "../../components/animations/fadeInFrom";

const Contatti = () => {
  return (
    <Box
      position="relative"
      pb={{ base: "10", md: "auto" }}
      bg="#090D1D"
      zIndex="0"
      id="contatti"
    >
      <Box
        position="absolute"
        inset='0'
        minH="250px"
        backgroundImage={{
          base: "/images/sellBanner.png",
          sm: "/images/sellBanner.png",
        }}
        backgroundSize="cover"
        backgroundPosition="center"
        zIndex="0"
      />

      <Container maxW="1200px" mx="auto" pt="10" zIndex="1" position="relative">
        <Flex
          direction="column"
          align="center"
          h="full"
          pb={10}
          textAlign="center"
        >
        <FadeInFrom id='contattiHeroText' direction='bottom'>
          <Heading
            fontSize="4xl"
            fontFamily="Ruda"
            fontWeight="bold"
            textColor="white"
          >
            Hai bisogno di{" "}
            <Box as="span" position="relative" display="inline-block">
              <Box
                as="span"
                position="absolute"
                bottom="10%"
                left="50%"
                transform="translateX(-50%)"
                width="102%"
                height="50%"
                bg="#090D1D"
                zIndex="1"
              ></Box>
              <span
                style={{
                  zIndex: "2",
                  position: "relative",
                }}
              >
                assistenza
              </span>
            </Box>{" "}
            legale?
          </Heading>
          <Text fontSize="md" mt={4} fontFamily="Roboto" color="white">
            Con oltre vent&apos;anni di esperienza, il nostro team offre una vasta
            gamma di servizi legali, tra cui{" "}
            <strong>
              diritto penale, acquisizioni aziendali, compliance, e diritto civile
            </strong>
            . Siamo qui per fornire soluzioni legali efficaci e personalizzate.{" "}
            <Box as="span" display="block" mt={4}>
              Contattaci oggi stesso per una consulenza!
            </Box>
          </Text>
          </FadeInFrom>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contatti;