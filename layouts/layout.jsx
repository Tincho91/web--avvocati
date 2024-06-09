"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";
import { Box } from "@chakra-ui/react";

export default function RootLayout({ children }) {
  return (
    <Box overflowX="hidden">
      <Navbar />
      {children}
      <ContactForm />
      <Footer />
    </Box>
  );
}