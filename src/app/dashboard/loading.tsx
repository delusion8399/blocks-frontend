"use client";

import { Container, Spinner } from "@chakra-ui/react";

export default function LoadingBlocks() {
  return (
    <Container
      maxWidth={"container.lg"}
      centerContent={true}
      justifyContent="center"
    >
      <Spinner />
    </Container>
  );
}
