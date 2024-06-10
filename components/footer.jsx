import {
  Flex,
  Box,
  Divider,
  Container,
  Text,
  Link,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const {
    isOpen: isPrivacyOpen,
    onOpen: onPrivacyOpen,
    onClose: onPrivacyClose,
  } = useDisclosure();
  const {
    isOpen: isCookiesOpen,
    onOpen: onCookiesOpen,
    onClose: onCookiesClose,
  } = useDisclosure();

  return (
    <Flex
      as="footer"
      bg="#090D1D"
      color="white"
      pt={{ base: "8", md: "5" }}
      pb={{ base: "5", md: "5" }}
      w="100%"
      id="footer"
    >
      <Container maxW="1200px" mx="auto">
        <Flex
          direction={{ base: "column", md: "row" }}
          wrap="wrap"
          align="center"
          justify="space-between"
        >
          {/* Additional Information */}
          <Flex
            direction={{ base: "column", sm: "row" }}
            justify="space-between"
            alignItems={{ base: "center", sm: "flex-start" }}
            mt={5}
            w="100%"
          >
            <VStack
              align={{ base: "flex-start", sm: "flex-start" }}
              textAlign={{ base: "left", sm: "left" }}
              spacing={2}
              w={{ base: "100%", md: "auto" }}
            >
              <Text fontWeight="bold">Sede di Cosenza</Text>
              <Text fontStyle="bold">87100 - Piazza Gullo, 5</Text>
              <Text fontWeight="bold">
                Email: infosegreteria@studiolegale.com
              </Text>
              <Text fontStyle="italic">PEC: studiolegale@pec.it</Text>
            </VStack>
            <VStack
              align={{ base: "flex-start", sm: "flex-end" }}
              textAlign={{ base: "left", sm: "right" }}
              spacing={2}
              mt={{ base: 5, sm: 0 }}
              w={{ base: "100%", md: "auto" }}
            >
              <Link href="#footer" onClick={onPrivacyOpen}>
                Privacy Policy
              </Link>
              <Link href="#footer" onClick={onCookiesOpen}>
                Cookie Policy
              </Link>
            </VStack>
          </Flex>

          {/* Brand Logo and Socials */}
          <Flex
            justifyContent="space-between"
            w="100%"
            alignItems="center"
            mt={10}
          >
            <Flex
              align="center"
              gap={10}
              w="full"
              direction={{ base: "column", md: "row" }}
            >
              <Flex
                align="center"
                gap={5}
                mx={{ base: "auto", md: "0" }}
                ml={{ md: "auto" }}
              >
                <Link isExternal href="mailto:example@example.com">
                  <FaEnvelope size="2em" />
                </Link>
                <Link
                  isExternal
                  href="https://api.whatsapp.com/send?phone=PHONE_NUMBER"
                >
                  <FaWhatsapp size="2em" />
                </Link>
                <Link isExternal href="https://www.linkedin.com/">
                  <FaLinkedin size="2em" />
                </Link>
              </Flex>
            </Flex>
          </Flex>

          {/* Designed by Neomedi Analytica */}
          <Box w="100%" textAlign="center" mt={5} fontSize="sm">
            <Link href="#">
              Designed by{" "}
              <Box as="span" fontStyle="italic" fontWeight='bold'>
                Neomedi Analytica
              </Box>
            </Link>
          </Box>
        </Flex>
      </Container>

      {/* Privacy Policy Modal */}
      <Modal isOpen={isPrivacyOpen} onClose={onPrivacyClose}>
        <ModalOverlay />
        <ModalContent maxW="95%">
          <ModalHeader>Privacy Policy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vestibulum arcu sit amet ullamcorper pellentesque. Etiam porta,
              erat tempor rutrum tempor, elit nunc tempor odio, et scelerisque
              erat eros ac purus. Ut iaculis eu mauris ut scelerisque. Duis
              lectus risus, dignissim sit amet iaculis at, tincidunt ac odio.
              Duis in dui tempor, gravida quam ac, consequat libero. Phasellus
              tellus augue, commodo in faucibus quis, elementum at leo.
              Phasellus metus ligula, tincidunt vitae dictum ac, tristique quis
              dolor. Nulla sapien mi, porta at suscipit a, finibus ut nisl.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Sed sem diam, fringilla nec vestibulum
              vitae, lobortis sed ligula. Nullam facilisis sit amet urna quis
              aliquet. Quisque non augue arcu. Etiam semper ultrices pretium.
              Nulla vitae dolor orci. Ut et odio nec velit facilisis pulvinar id
              tristique nisl. Curabitur lacinia arcu a lacus finibus commodo.
              Sed porta aliquet felis sed rutrum. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nullam vitae nibh sed justo dapibus
              consectetur. Nam non justo mi. Suspendisse quis justo vitae augue
              ultricies bibendum vitae eget neque. Donec viverra, sem vel tempor
              dapibus, dui neque laoreet libero, ac semper eros ipsum sed neque.
              Vestibulum tincidunt dolor sed nulla convallis facilisis. Integer
              sit amet sem placerat, vestibulum risus eget, finibus tellus.
              Vivamus pretium, elit sed egestas mattis, enim magna consequat mi,
              sit amet tempor est sem et erat. Aliquam dignissim et leo laoreet
              tempus. In molestie mi ut est ullamcorper, eget lobortis lectus
              suscipit. Proin nec justo at nisi porta viverra. Vivamus commodo
              egestas massa, non ornare ex bibendum a. Cras a ex venenatis,
              blandit justo ut, varius enim. Vivamus dignissim lectus et risus
              molestie efficitur. Vivamus cursus, est sit amet pretium euismod,
              nunc ante finibus urna, a tempor erat nulla ac odio. Nulla
              facilisi. Cras in tincidunt ante. Quisque finibus finibus nunc, ac
              consequat mi porta ut. Nullam ultricies augue id est egestas
              luctus. Quisque a nisi lorem. Phasellus ut ligula felis. Donec
              risus nibh, hendrerit nec dapibus id, tincidunt ac risus. Sed nibh
              quam, vestibulum sit amet nunc vitae, gravida dignissim enim.
              Donec id augue libero. Phasellus ac laoreet erat. Donec urna mi,
              consequat vel consequat non, porta sit amet orci. Etiam sodales
              dictum iaculis. Nam rutrum, orci et egestas ultrices, dolor enim
              sodales ipsum, non mollis lectus sapien nec mauris. Aenean
              malesuada leo nec vestibulum finibus. Proin sed nunc dolor. Duis
              sit amet metus at nibh facilisis aliquet. Vestibulum at lectus sed
              tortor ultrices dapibus suscipit a ligula. Integer pellentesque
              elementum est, vitae ultrices diam vestibulum eu. Sed metus magna,
              sagittis vel cursus eget, semper sed massa. Praesent scelerisque a
              urna eu porttitor. Aliquam erat volutpat. Duis condimentum, neque
              non pharetra accumsan, augue velit mollis orci, et molestie arcu
              turpis at diam. Vivamus non tempus libero, id sollicitudin nisl.
              Mauris ut faucibus justo, ut auctor justo. Maecenas risus urna,
              viverra at sem eget, placerat gravida justo. Aliquam erat
              volutpat. Etiam porttitor, quam eget bibendum commodo, orci leo
              placerat ligula, egestas sagittis erat mauris vitae lectus. Fusce
              in arcu risus. Proin in commodo purus. Nam vel imperdiet urna.
              Proin ultrices ac mauris eu tempus. Curabitur in consequat nisl.
              Quisque sed massa nulla. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Vivamus tincidunt, justo ac fringilla aliquet,
              mauris urna semper justo, sed faucibus diam ex vel orci. Cras
              tincidunt ac nisl ac ultrices. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Nam diam
              elit, posuere non lobortis at, lacinia eu lectus. Curabitur sit
              amet tortor et nibh aliquam efficitur. Mauris vitae molestie urna,
              et vehicula massa. Aliquam at sapien suscipit odio sodales
              pretium. Duis tincidunt commodo leo ut tempus. In placerat rutrum
              justo et rutrum. Nunc accumsan nunc urna, at malesuada eros
              egestas eget. Etiam accumsan interdum dolor, ac fringilla ex
              iaculis vel. Pellentesque non pellentesque nisl. Mauris id
              facilisis mi. Vivamus molestie ligula a lectus aliquet rutrum.
              Pellentesque consequat augue semper augue dignissim, vitae
              ullamcorper neque faucibus. Aenean mollis neque nec risus
              malesuada, vel scelerisque nibh eleifend. Nunc mattis accumsan
              condimentum. Aenean eget enim libero. In vel magna urna. Praesent
              tristique nulla vitae neque blandit accumsan eu at sem. Nulla
              accumsan sem id ex hendrerit posuere. Maecenas auctor nisl
              facilisis magna placerat, quis suscipit ligula efficitur. Sed
              hendrerit orci ac pulvinar tempus. Morbi mauris lorem, pulvinar
              sit amet mi eu, pretium tincidunt urna. Sed vitae erat est. Nulla
              elementum turpis vel scelerisque ullamcorper. Cras diam nulla,
              vehicula eu nunc vel, facilisis pretium lorem. Curabitur pulvinar
              dictum purus, eget suscipit velit efficitur non. Etiam sed justo
              id ante eleifend aliquam et a ligula. Etiam ut tincidunt arcu.
              Praesent et risus dignissim ex scelerisque bibendum. Cras vitae
              massa a mauris elementum tempus. Ut nec laoreet nibh. Maecenas
              quam felis, fermentum nec condimentum non, dapibus non ante. In
              vestibulum, lacus eget dignissim lacinia, diam purus molestie
              nunc, a tincidunt diam est eu odio. Cras ornare risus augue, ut
              facilisis ante fringilla vel. Phasellus pharetra augue est, et
              eleifend nulla venenatis lobortis. Ut nibh diam, congue quis
              mauris in, pretium dictum enim. Fusce posuere blandit urna, non
              rhoncus eros maximus sit amet. Aliquam consectetur, tortor nec
              lacinia laoreet, metus enim varius ligula, nec rutrum est leo nec
              mi. Ut et porta tellus, vel lacinia quam. Sed maximus velit ex, id
              ullamcorper velit pharetra ut. Mauris vel blandit magna, ut
              lobortis est. Duis convallis nibh nisl, ut molestie elit tincidunt
              at. Fusce porttitor sit amet dui sit amet suscipit. Phasellus
              mattis pharetra nunc sit amet suscipit. Ut felis leo, dignissim
              non urna id, gravida accumsan magna. Morbi id nulla eu sapien
              laoreet vehicula. Donec ultrices lobortis turpis sit amet posuere.
              Curabitur sem nisl, ultrices sit amet massa id, elementum
              facilisis sem. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Nullam pretium iaculis
              felis, ac dignissim enim tincidunt non. Maecenas lobortis faucibus
              venenatis. Nullam a consequat eros.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onPrivacyClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Cookies Policy Modal */}
      <Modal isOpen={isCookiesOpen} onClose={onCookiesClose}>
        <ModalOverlay />
        <ModalContent maxW="95%">
          <ModalHeader>Cookie Policy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vestibulum arcu sit amet ullamcorper pellentesque. Etiam porta,
              erat tempor rutrum tempor, elit nunc tempor odio, et scelerisque
              erat eros ac purus. Ut iaculis eu mauris ut scelerisque. Duis
              lectus risus, dignissim sit amet iaculis at, tincidunt ac odio.
              Duis in dui tempor, gravida quam ac, consequat libero. Phasellus
              tellus augue, commodo in faucibus quis, elementum at leo.
              Phasellus metus ligula, tincidunt vitae dictum ac, tristique quis
              dolor. Nulla sapien mi, porta at suscipit a, finibus ut nisl.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Sed sem diam, fringilla nec vestibulum
              vitae, lobortis sed ligula. Nullam facilisis sit amet urna quis
              aliquet. Quisque non augue arcu. Etiam semper ultrices pretium.
              Nulla vitae dolor orci. Ut et odio nec velit facilisis pulvinar id
              tristique nisl. Curabitur lacinia arcu a lacus finibus commodo.
              Sed porta aliquet felis sed rutrum. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nullam vitae nibh sed justo dapibus
              consectetur. Nam non justo mi. Suspendisse quis justo vitae augue
              ultricies bibendum vitae eget neque. Donec viverra, sem vel tempor
              dapibus, dui neque laoreet libero, ac semper eros ipsum sed neque.
              Vestibulum tincidunt dolor sed nulla convallis facilisis. Integer
              sit amet sem placerat, vestibulum risus eget, finibus tellus.
              Vivamus pretium, elit sed egestas mattis, enim magna consequat mi,
              sit amet tempor est sem et erat. Aliquam dignissim et leo laoreet
              tempus. In molestie mi ut est ullamcorper, eget lobortis lectus
              suscipit. Proin nec justo at nisi porta viverra. Vivamus commodo
              egestas massa, non ornare ex bibendum a. Cras a ex venenatis,
              blandit justo ut, varius enim. Vivamus dignissim lectus et risus
              molestie efficitur. Vivamus cursus, est sit amet pretium euismod,
              nunc ante finibus urna, a tempor erat nulla ac odio. Nulla
              facilisi. Cras in tincidunt ante. Quisque finibus finibus nunc, ac
              consequat mi porta ut. Nullam ultricies augue id est egestas
              luctus. Quisque a nisi lorem. Phasellus ut ligula felis. Donec
              risus nibh, hendrerit nec dapibus id, tincidunt ac risus. Sed nibh
              quam, vestibulum sit amet nunc vitae, gravida dignissim enim.
              Donec id augue libero. Phasellus ac laoreet erat. Donec urna mi,
              consequat vel consequat non, porta sit amet orci. Etiam sodales
              dictum iaculis. Nam rutrum, orci et egestas ultrices, dolor enim
              sodales ipsum, non mollis lectus sapien nec mauris. Aenean
              malesuada leo nec vestibulum finibus. Proin sed nunc dolor. Duis
              sit amet metus at nibh facilisis aliquet. Vestibulum at lectus sed
              tortor ultrices dapibus suscipit a ligula. Integer pellentesque
              elementum est, vitae ultrices diam vestibulum eu. Sed metus magna,
              sagittis vel cursus eget, semper sed massa. Praesent scelerisque a
              urna eu porttitor. Aliquam erat volutpat. Duis condimentum, neque
              non pharetra accumsan, augue velit mollis orci, et molestie arcu
              turpis at diam. Vivamus non tempus libero, id sollicitudin nisl.
              Mauris ut faucibus justo, ut auctor justo. Maecenas risus urna,
              viverra at sem eget, placerat gravida justo. Aliquam erat
              volutpat. Etiam porttitor, quam eget bibendum commodo, orci leo
              placerat ligula, egestas sagittis erat mauris vitae lectus. Fusce
              in arcu risus. Proin in commodo purus. Nam vel imperdiet urna.
              Proin ultrices ac mauris eu tempus. Curabitur in consequat nisl.
              Quisque sed massa nulla. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Vivamus tincidunt, justo ac fringilla aliquet,
              mauris urna semper justo, sed faucibus diam ex vel orci. Cras
              tincidunt ac nisl ac ultrices. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Nam diam
              elit, posuere non lobortis at, lacinia eu lectus. Curabitur sit
              amet tortor et nibh aliquam efficitur. Mauris vitae molestie urna,
              et vehicula massa. Aliquam at sapien suscipit odio sodales
              pretium. Duis tincidunt commodo leo ut tempus. In placerat rutrum
              justo et rutrum. Nunc accumsan nunc urna, at malesuada eros
              egestas eget. Etiam accumsan interdum dolor, ac fringilla ex
              iaculis vel. Pellentesque non pellentesque nisl. Mauris id
              facilisis mi. Vivamus molestie ligula a lectus aliquet rutrum.
              Pellentesque consequat augue semper augue dignissim, vitae
              ullamcorper neque faucibus. Aenean mollis neque nec risus
              malesuada, vel scelerisque nibh eleifend. Nunc mattis accumsan
              condimentum. Aenean eget enim libero. In vel magna urna. Praesent
              tristique nulla vitae neque blandit accumsan eu at sem. Nulla
              accumsan sem id ex hendrerit posuere. Maecenas auctor nisl
              facilisis magna placerat, quis suscipit ligula efficitur. Sed
              hendrerit orci ac pulvinar tempus. Morbi mauris lorem, pulvinar
              sit amet mi eu, pretium tincidunt urna. Sed vitae erat est. Nulla
              elementum turpis vel scelerisque ullamcorper. Cras diam nulla,
              vehicula eu nunc vel, facilisis pretium lorem. Curabitur pulvinar
              dictum purus, eget suscipit velit efficitur non. Etiam sed justo
              id ante eleifend aliquam et a ligula. Etiam ut tincidunt arcu.
              Praesent et risus dignissim ex scelerisque bibendum. Cras vitae
              massa a mauris elementum tempus. Ut nec laoreet nibh. Maecenas
              quam felis, fermentum nec condimentum non, dapibus non ante. In
              vestibulum, lacus eget dignissim lacinia, diam purus molestie
              nunc, a tincidunt diam est eu odio. Cras ornare risus augue, ut
              facilisis ante fringilla vel. Phasellus pharetra augue est, et
              eleifend nulla venenatis lobortis. Ut nibh diam, congue quis
              mauris in, pretium dictum enim. Fusce posuere blandit urna, non
              rhoncus eros maximus sit amet. Aliquam consectetur, tortor nec
              lacinia laoreet, metus enim varius ligula, nec rutrum est leo nec
              mi. Ut et porta tellus, vel lacinia quam. Sed maximus velit ex, id
              ullamcorper velit pharetra ut. Mauris vel blandit magna, ut
              lobortis est. Duis convallis nibh nisl, ut molestie elit tincidunt
              at. Fusce porttitor sit amet dui sit amet suscipit. Phasellus
              mattis pharetra nunc sit amet suscipit. Ut felis leo, dignissim
              non urna id, gravida accumsan magna. Morbi id nulla eu sapien
              laoreet vehicula. Donec ultrices lobortis turpis sit amet posuere.
              Curabitur sem nisl, ultrices sit amet massa id, elementum
              facilisis sem. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Nullam pretium iaculis
              felis, ac dignissim enim tincidunt non. Maecenas lobortis faucibus
              venenatis. Nullam a consequat eros.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCookiesClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Footer;
