"use client";

import {
  Box,
  Text,
  Heading,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import Info from "./components/info";

const Nosotros = () => {
  const breakpoint = useBreakpointValue({ base: "base", sm: "sm", md: 'md', lg: 'lg' });

  return (
    <>
      <Box
        bgImage={
          breakpoint === "base"
            ? "url('/images/teamBannerDesktop.png')"
            : "url('/images/teamBannerDesktop.png')"
        }
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition={{ base: "77%", sm: "75% 20%" }}
        h={{ base: "550px", sm: "300px" }}
        maxH="80vh"
        position="relative"
        overflowX="hidden"
      >
        <Container maxW="1200px" h="100%" mx="auto">
          <Box
            position={"absolute" }
            top={{ base: "65%", sm: "30%",  md: "45%" }}
            left={{ sm: 0, md: "auto" }}
            m={{ sm: 5, md: "0" }}
            p={{ base: 5, md: "5" }}
            bg={{ base: "rgba(0,0,0,0.5)", md: "rgba(255,255,255,0.8)" }}
            textColor={{ base: "white", md: "#090D1D" }}
            w={{ base: "75%", sm: "55%", xl: "30%" }}
          >
            <Heading as="h1" size="xl" fontFamily="Ruda">
              Il Nostro Team
            </Heading>
            <Text mt={2}>
              Siamo composto da avvocati esperti e dediti, pronti a offrire soluzioni legali efficaci e personalizzate per ogni cliente.
            </Text>
          </Box>
        </Container>
      </Box>
      <Info />
    </>
  );
};

export default Nosotros;
