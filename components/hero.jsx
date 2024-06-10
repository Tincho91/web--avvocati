import { Box, Flex, Text, Heading, Container, Link } from "@chakra-ui/react";
import { AnimatedIcon } from "./animations/animatedIcon";
import { ArrowDownIcon } from "@chakra-ui/icons";

import FadeInFrom from "./animations/fadeInFrom";

const Hero = () => {
  return (
    <>
      <Box
        h={{ base: "calc(95vh - 150px)", sm: "calc(95vh - 76px)" }}
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
          backgroundImage="linear-gradient(180deg, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0) 100%), url('/images/hero.jpeg')"
          backgroundSize="cover"
          backgroundPosition="top"
          zIndex="-1"
        />
        <Container maxW="1200px" mx="auto" mb={{ base: "0", sm: "5" }}>
          <FadeInFrom direction="bottom" id="heroText">
            <Flex
              direction="column"
              align="flex-start"
              h="full"
              w={{ base: "full", lg: "75%" }}
            >
              <Heading
                fontSize={{ base: "4xl", md: "5xl" }}
                fontFamily="Ruda"
                fontWeight="bold"
              >
                Esperienza e{" "}
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
                    professionalità
                  </span>
                </Box>
                . Difendiamo i{" "}
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
                    tuoi diritti
                  </span>
                </Box>
                .
              </Heading>
            </Flex>
          </FadeInFrom>
        </Container>
      </Box>
      <Container maxW="1200px" mx="auto" position="relative">
        <Link
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
          href="#servizi"
        >
          <Flex alignItems="center" gap={5}>
            <AnimatedIcon IconComponent={ArrowDownIcon} />
            <Text>SCOPRI DI PIÙ</Text>
          </Flex>
        </Link>
      </Container>
    </>
  );
};

export default Hero;
