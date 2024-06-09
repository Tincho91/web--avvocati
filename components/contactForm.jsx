import {
  Box,
  Heading,
  Flex,
  FormControl,
  Input,
  Select,
  Button,
  Text,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    indirizzoEmail: "",
    telefono: "",
    tipoServizio: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (!formData.nomeCompleto)
      errors.nomeCompleto = "Nome completo obbligatorio.";
    if (!formData.indirizzoEmail)
      errors.indirizzoEmail = "Indirizzo email obbligatorio.";
    if (!formData.telefono) errors.telefono = "Telefono obbligatorio.";

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Dati del modulo:", formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box bg="#ECF0FF">
      <Container py={5} maxW="1200px" mx="auto">
        <Heading color="black" pb={5} fontFamily="Ruda" textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
          Contatti
        </Heading>
        <Box bg="white" m="5">
          <Box border="2px" borderColor="#090D1D" p={{base: "5", sm: "10"}}>
            <FormControl isInvalid={formErrors.nomeCompleto} mb="4">
              <Input
                placeholder="Nome completo"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
              />
              {formErrors.nomeCompleto && (
                <Text color="red.500">{formErrors.nomeCompleto}</Text>
              )}
            </FormControl>

            <FormControl isInvalid={formErrors.indirizzoEmail} mb="4">
              <Input
                placeholder="Indirizzo email"
                name="indirizzoEmail"
                value={formData.indirizzoEmail}
                onChange={handleChange}
              />
              {formErrors.indirizzoEmail && (
                <Text color="red.500">{formErrors.indirizzoEmail}</Text>
              )}
            </FormControl>

            <FormControl isInvalid={formErrors.telefono} mb="4">
              <Input
                placeholder="Telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
              {formErrors.telefono && (
                <Text color="red.500">{formErrors.telefono}</Text>
              )}
            </FormControl>

            <FormControl mb="4">
              <Select
                placeholder="Servizio richiesto"
                name="tipoServizio"
                value={formData.tipoServizio}
                onChange={handleChange}
              >
                <option value="Diritto Penale">Diritto Penale</option>
                <option value="Acquisizioni Aziendali">
                  Acquisizioni Aziendali
                </option>
                <option value="Compliance">Compliance</option>
                <option value="Diritto Civile">Diritto Civile</option>
                <option value="Diritto Civile">Altro</option>
              </Select>
            </FormControl>

            <Button
              colorScheme="blue"
              fontFamily="Roboto"
              fontSize="16px"
              fontWeight={300}
              letterSpacing="4.8px"
              bg="#090D1D"
              borderRadius={0}
              py={7}
              onClick={handleSubmit}
              width="100%"
            >
              <Flex
                gap={2}
                justify="center"
                fontFamily="Roboto"
                fontSize="16px"
                fontWeight={300}
                letterSpacing="4.8px"
              >
                <AiOutlineSend />
                <Text>INVIA</Text>
              </Flex>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
