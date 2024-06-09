import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import FadeInFrom from "../../../components/animations/fadeInFrom";

const Info = () => {
  const breakpoint = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <Box position="relative">
      {/* Fondo superior */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        h={{ base: "200px", sm: "280px" }}
        bg="#090D1D"
        zIndex="-1"
      />
      <Container maxW="1200px" h="100%" mx="auto">
        <Box py="20" width="full" w={{ base: "full", md: "75%" }} mx="auto">
          {breakpoint === "base" ? (
            <Flex
              direction="column"
              align="stretch"
              position="relative"
              zIndex="0"
            >
              <FadeInFrom direction="left" id="mariaAgo">
                <Image
                  src="/images/team2-2.png"
                  h="250px"
                  alt="Maria Agovino"
                  alignSelf="flex-start"
                  objectFit="cover"
                />
              </FadeInFrom>
              <FadeInFrom direction="left" id="mariaAgo">
                <Box py={5}>
                  <Heading fontFamily="Ruda">Maria Agovino</Heading>
                  <Text fontFamily="Roboto">
                    Avvocato dal 2001, con 27 anni di esperienza nel mercato
                    legale locale. Perito legale presso il Tribunale di Milano.
                  </Text>
                </Box>
              </FadeInFrom>
              <Box position="relative" zIndex="0" py={5} px="4" mx="-4">
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg="#090D1D"
                  zIndex="0"
                />
                <Box position="relative" zIndex="1">
                  <Text color="white" fontFamily="Roboto">
                    Lo studio legale ha attraversato una fase di crescita
                    costante e, per oltre 20 anni, ha fornito consulenza legale
                    e assistenza giudiziaria. Con una reputazione impeccabile,
                    un approccio cordiale e professionale, oggi si impegna a
                    sfruttare le opportunità digitali, senza perdere la propria
                    empatia e la vocazione a offrire soluzioni legali efficaci e
                    pragmatiche.
                  </Text>
                </Box>
              </Box>
              <FadeInFrom direction="right" id="mauraMon">
                <Box bg="white" py={5}>
                  <Heading fontFamily="Ruda">Maura Monteforte</Heading>
                  <Text fontFamily="Roboto">
                    Al nostro team si è unita una cara amica della casa. Lei
                    segue i nostri principi fondamentali: Comunicazione,
                    Disponibilità, Competenza. Requisiti essenziali per fornire
                    un&apos;assistenza legale sicura ed efficace.
                  </Text>
                </Box>
                <Image
                  src="/images/team1-2.jpg"
                  h="250px"
                  alt="Maura Monteforte"
                  alignSelf="flex-end"
                  objectFit="cover"
                />
              </FadeInFrom>
            </Flex>
          ) : (
            <Flex direction="column">
              <FadeInFrom direction="left" id="mariaAgo">
                <Flex>
                  <Box w="full" maxW="250px">
                    <Image
                      src="/images/team2-2.png"
                      objectFit="cover"
                      alt="Maria Agovino"
                      h="400px"
                      w="auto"
                    />
                  </Box>
                  <Box bgColor="#ECF0FF" my="auto" ml="-5" p={10}>
                    <Heading py="3" fontFamily="Ruda">
                      Maria Agovino
                    </Heading>
                    <Box>
                      <Text fontFamily="Roboto">
                        Avvocato dal 2001, con 27 anni di esperienza nel mercato
                        legale locale. Perito legale presso il Tribunale di Mar
                        del Plata.
                      </Text>
                    </Box>
                  </Box>
                </Flex>
              </FadeInFrom>
              <Box bg="#090D1D" my={-5} w="70%" p={10} mx="auto">
                <Text color="white" fontFamily="Roboto">
                  Lo studio legale ha attraversato una fase di crescita costante
                  e, per oltre 20 anni, ha fornito consulenza legale e
                  assistenza giudiziaria. Con una reputazione impeccabile, un
                  approccio cordiale e professionale, oggi si impegna a
                  sfruttare le opportunità digitali, senza perdere la propria
                  empatia e la vocazione a offrire soluzioni legali efficaci e
                  pragmatiche.
                </Text>
              </Box>
              <FadeInFrom direction="right" id="mauraMon">
                <Flex>
                  <Box bgColor="#ECF0FF" my="auto" mr="-5" p={10} zIndex={5}>
                    <Heading py="3" fontFamily="Ruda">
                      Maura Monteforte
                    </Heading>
                    <Text fontFamily="Roboto">
                      Al nostro team si è unita una cara amica della casa. Lei
                      segue i nostri principi fondamentali: Comunicazione,
                      Disponibilità, Competenza. Requisiti essenziali per
                      fornire un&apos;assistenza legale sicura ed efficace.
                    </Text>
                  </Box>
                  <Box w="full" maxW="250px" minW="130px">
                    <Image
                      src="/images/team1-2.jpg"
                      objectFit="cover"
                      alt="Maura Monteforte"
                      h="400px"
                      width="auto"
                    />
                  </Box>
                </Flex>
              </FadeInFrom>
            </Flex>
          )}
        </Box>
      </Container>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="280px"
        bg="#090D1D"
        zIndex="-1"
      />
    </Box>
  );
};

export default Info;
