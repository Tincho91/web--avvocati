import {
  Box,
  Flex,
  Text,
  Heading,
  Container,
} from "@chakra-ui/react";
import { AnimatedIcon } from "./animations/animatedIcon";
import { ArrowDownIcon } from "@chakra-ui/icons";

const Hero = () => {
  return (
    <>
      <Box
        minH={{ base: "calc(100vh - 92px)", md: "calc(100vh - 92px)" }}
        maxH="100vh"
        position="relative"
        backgroundSize="cover"
        backgroundPosition="center"
        pb={{ base: "10", lg: "auto" }}
        pt="10"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage="linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 25%), url('/images/hero.jpeg')"
          backgroundSize="cover"
          backgroundPosition="center"
          zIndex="-1"
        />
        <Container maxW="1200px" mx="auto" mb={{ base: "0", sm: "5" }}>
          <Flex direction="column" align="flex-start" h="full">
            <Heading fontSize="4xl" fontFamily="Ruda" fontWeight="bold">
              Il tuo{" "}
              <Box as="span" position="relative" display="inline-block">
                <Box
                  as="span"
                  position="absolute"
                  bottom="10%"
                  left="50%"
                  transform="translateX(-50%)"
                  width="102%"
                  height="50%"
                  bg="#B9D0FF"
                  zIndex="1"
                ></Box>
                <span
                  style={{
                    zIndex: "2",
                    position: "relative",
                  }}
                >
                  alleato
                </span>
              </Box>{" "}
              legale
            </Heading>
            <Text fontSize="lg" mt={4} fontFamily="Roboto">
            Esperti in diritto{" "}
              <strong>civile, penale, societario</strong> e nelle consulenze legali personalizzate.
            </Text>
          </Flex>
        </Container>
      </Box>
      <Container maxW="1200px" mx="auto" position="relative">
        <Box
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight={300}
          letterSpacing="4.8px"
          position="absolute"
          bottom="0"
          right="0"
          bg="#090D1D"
          zIndex="1"
          p={5}
          color="white"
        >
          <Flex alignItems="center" gap={5}>
            <AnimatedIcon IconComponent={ArrowDownIcon} />
            <Text>SCOPRI DI PIÙ</Text>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default Hero;
