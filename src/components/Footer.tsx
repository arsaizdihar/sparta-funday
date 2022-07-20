import { Box, Container, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" bgColor={"orange.200"}>
      <Container maxW="container.lg" color={"orange.600"} py={4} px={4}>
        <Text>Made with ❤️ by SPARTANS HMIF 2021 - Arsa.</Text>
      </Container>
    </Box>
  );
}

export default Footer;
