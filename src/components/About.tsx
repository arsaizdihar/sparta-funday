import { Box, Container, Heading, Text } from "@chakra-ui/react";

function About() {
  return (
    <Box py={8} px={4}>
      <Container
        maxW="container.sm"
        py={8}
        bgColor="orange.50"
        borderRadius={6}
        shadow="md"
        textAlign={"center"}
      >
        <Heading as="h2" fontSize="4xl" mb={2}>
          ABOUT
        </Heading>
        <Text fontSize={"lg"}>
          <b>FUNDAY</b> merupakan salah satu Day dari <b>SPARTA 2021</b>, yang
          dilaksanakan pada tanggal 20 Juli 2022. Agenda ini merupakan agenda
          yang mengandung unsur <i>offline</i> pertama di{" "}
          <b>SPARTA 2021. FUNDAY</b> berisikan beberapa challenge yang harus
          dijalani oleh para SPARTANS sebelum pukul 18.00 WIB.
        </Text>
      </Container>
    </Box>
  );
}

export default About;
