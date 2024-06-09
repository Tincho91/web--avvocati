import {
  Box,
  Image,
  Text,
  Container,
  useBreakpointValue,
  Flex,
  VStack,
  Heading,
  Link,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import FadeInFrom from "./animations/fadeInFrom";

const Team = () => {
  const displayText = useBreakpointValue({
    base: "block",
    sm: "static",
  });

  const containerBg = useBreakpointValue({
    base: "none",
    sm: "#ECF0FF",
  });

  const imagePadding = useBreakpointValue({
    base: "0",
    sm: "4",
  });

  const imageUrl = useBreakpointValue({
    base: "images/team1.jpg",
    sm: "images/team1.jpg",
  });

  return (
    <Box
      position="relative"
      bg={containerBg}
      pt={{ base: "0", sm: imagePadding }}
      py="8"
    >
      <Container maxW="1200px" mx="auto" position="relative">
        <Flex position="relative" direction="column">
          <Image
            src={imageUrl}
            alt="Team"
            mx={{ base: "0", sm: imagePadding }}
            mt={{ base: "0", sm: imagePadding }}
            minH={{ base: "280px", sm: "auto" }}
            objectFit="cover"
          />

          <VStack
            position={{ base: "static", md: "absolute" }}
            right="0"
            bottom="0"
            maxW={{ base: "", md: "300px" }}
            mt={{ base: 4, sm: 0 }}
            spacing={2}
            alignItems="flex-start"
            bg={{ sm: "#ECF0FF" }}
            mb={{ base: 3, md: 0 }}
          >
            <FadeInFrom direction="right" id="teamText">
              <Heading
                pt={{ sm: 3 }}
                pl={{ sm: 3 }}
                pr={{ sm: 3 }}
                fontFamily="Ruda"
                fontSize={{ base: "4xl", md: "5xl" }}
              >
                Il Nostro Team
              </Heading>
              <Text
                pt={{ sm: 3 }}
                pl={{ sm: 3 }}
                pr={{ sm: 3 }}
                fontFamily="Roboto"
                color="#090D1DCC"
                fontSize="16px"
                pb={5}
              >
                Siamo composto da avvocati esperti e dediti, pronti a offrire
                soluzioni legali efficaci e personalizzate per ogni cliente.
              </Text>
            </FadeInFrom>
            <Link href="/noi" width="full" style={{ textDecoration: "none" }}>
              <Box
                colorScheme="blue"
                fontFamily="Roboto"
                fontSize="16px"
                fontWeight={300}
                letterSpacing="4.8px"
                bg="#090D1D"
                zIndex="1"
                py={5}
                color="white"
                display={displayText}
              >
                <Flex
                  alignItems="center"
                  gap={2}
                  alignlign="center"
                  justify="center"
                >
                  <AddIcon boxSize="16px" />
                  <Text>DETTAGLI</Text>
                </Flex>
              </Box>
            </Link>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Team;
