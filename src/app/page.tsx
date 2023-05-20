"use client";
import { Container } from "@chakra-ui/react";
import Hero from "./components/hero";

export default function Home() {
  return (
    <Container maxWidth={"container.lg"}>
      <Hero />
    </Container>
  );
}
