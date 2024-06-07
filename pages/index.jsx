"use client";

import { Box } from "@chakra-ui/react";

import Hero from "../components/hero";
import Servizi from "../components/servizi";
import Team from "../components/team";

const HomePage = () => {

  return (
    <Box>
      <Hero />
      <Servizi />
      <Team />
    </Box>
  )
}

export default HomePage