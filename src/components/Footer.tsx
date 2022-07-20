import { Box, Container, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" bgColor={"orange.600"}>
      <Container maxW="container.lg" color={"white"} py={4} px={4}>
        <Text>Made with ❤️ by SPARTANS HMIF 2021.</Text>
      </Container>
    </Box>
  );
}

export default Footer;
