import {
  Box,
  Container,
  Flex,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavBar() {
  return (
    <Box bg={"orange.50"}>
      <Container px={4} maxW="container.lg">
        <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Text
              fontSize={"2xl"}
              fontWeight="bold"
              fontFamily={"heading"}
              letterSpacing={2}
              color={"blue.800"}
            >
              SPARTA FUNDAY :D
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
