import { Box, Text, Container, Heading, Flex, Link } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

const services = [
  {
    title: "Diritto Penale",
    description: "Servizi legali in diritto penale, supporto in casi complessi.",
    bgImage: "/images/servicios.jpg"
  },
  {
    title: "Acquisizioni Aziendali",
    description: "Consulenza per acquisizioni e ristrutturazioni aziendali.",
    bgImage: "/images/servicios.jpg"
  },
  {
    title: "Compliance",
    description: "Supporto per la compliance secondo il D.Lgs. 231/2001.",
    bgImage: "/images/servicios.jpg"
  },
  {
    title: "Diritto Civile",
    description: "Consulenze su questioni societarie, contrattuali, privacy, marchi e reputazione.",
    bgImage: "/images/servicios.jpg"
  }
];

const ServiziList = () => {
  return (
    <>
      {services.map((service, index) => (
        <Box key={index} bg={index % 2 === 0 ? "#090D1D" : "white"} position="relative">
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
              position="relative"
              display="flex"
              alignItems="center"
              flexDirection="column"
              textAlign="left"
              px={{ base: 6, md: 10 }}
              pt={{ base: 12, md: 10 }}
              pb={{ base: "5rem", md: 10 }}
              mb={8}
              color="white" // text color set to white for all text
              bgImage={`linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url('${service.bgImage}')`}
              bgSize="cover"
              bgPosition="center"
            >
              <Heading color="white" pb={5} fontFamily="Ruda">
                {service.title}
              </Heading>
              <Text
                color="white"
                fontFamily="Roboto"
                maxW="100%"
                flex="1"
              >
                {service.description}
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
                  bg={index % 2 === 0 ? "#090D1D" : "white"}
                  zIndex="1"
                  py={5}
                  px={20}
                  color={index % 2 === 0 ? "white" : "black"} // text color for button
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight={300}
                  letterSpacing="4.8px"
                >
                  <ChatIcon boxSize="16px" />
                  <Text color={index % 2 === 0 ? "white" : "black"}>RICHIEDI INFORMAZIONI</Text>
                </Flex>
              </Link>
            </Box>
          </Container>
        </Box>
      ))}
    </>
  );
};

export default ServiziList;
