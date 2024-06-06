import { Box, Text, Container, Heading, Flex, Link } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

const Contacto = () => {
  return (
    <Box bg="#090D1D" position="relative">
      <Container
        maxW="1200px"
        mx="auto"
        py="8"
        position="relative"
        overflow="hidden"
      >
        <Box
          minHeight="375px"
          bgImage="url('/images/servicios.jpg')"
          bgSize="cover"
          bgPosition="center"
          position="relative"
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="left"
          px={{ base: 6, md: 10 }}
          pt={{ base: 12, md: 10 }}
          pb={{ base: "20%", md: 10 }}
        >
          <Heading color="white" pb={5} fontFamily="Ruda">
            Le Aree di Attività
          </Heading>
          <Text
            color="white"
            fontFamily="Roboto"
            maxW="100%"
            flex="1"
          >
            Lo Studio offre un&apos;ampia gamma di servizi legali, tra cui assistenza
            in diritto penale, acquisizioni e ristrutturazioni aziendali, e
            compliance secondo il Decreto Legislativo n. 231/2001. Con oltre
            vent&apos;anni di esperienza, partecipa anche a due diligence per
            operazioni di private equity e aziende pubbliche. Recentemente, ha
            creato un dipartimento di diritto civile per fornire consulenza
            completa su questioni societarie, contrattuali, di privacy, marchio
            e reputazione. I professionisti lavorano in team organizzati per
            garantire la massima serietà e professionalità, e collaborano con
            altre Law Firm e consulenti tecnici a livello nazionale e
            internazionale.
          </Text>
          <Link href="/">
            <Flex
              alignItems="center"
              gap={5}
              justifyContent="center"
              position="absolute"
              bottom="0"
              right={{ base: "5%", sm: 0 }}
              left={{ base: "5%", sm: "auto" }}
              bg="#090D1D"
              zIndex="1"
              py={5}
              px={20}
              color="white"
              fontFamily="Roboto"
              fontSize="16px"
              fontWeight={300}
              letterSpacing="4.8px"
            >
              <ChatIcon boxSize="16px" />
              <Text>CONTACTANOS</Text>
            </Flex>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Contacto;
