import { Box, Text, Container, Heading, Flex, Link } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

const Servizi = () => {
  return (
    <Box bg="#090D1D" position="relative">
      <Container
        maxW="1200px"
        mx="auto"
        py="8"
        px={8}
        position="relative"
        overflow="hidden"
      >
        <Box
          minHeight="375px"
          bgImage={`linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url('/images/servicios.jpg')"`}
          bgSize="cover"
          bgPosition="center"
          position="relative"
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="left"
          px={{ base: 6, md: 10 }}
          pt={{ base: 12, md: 10 }}
          pb={{ base: "8rem", md: 10 }}
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
            Lo Studio offre servizi legali in diritto penale, acquisizioni aziendali e compliance. Con oltre vent&apos;anni di esperienza, supporta operazioni di due diligence per private equity e aziende pubbliche. Ha creato un dipartimento di diritto civile per consulenze su questioni societarie, contrattuali, privacy, marchi e reputazione. I professionisti collaborano con altre Law Firm e consulenti a livello nazionale e internazionale.
          </Text>
          <Link href="/servizi">
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
              <Text>VEDI I SERVIZI</Text>
            </Flex>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Servizi;
