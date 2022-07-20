import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export interface ChallengesProps {
  challenges: Array<{
    title: string;
    description: string;
    slug: string;
  }>;
}

function Challenges(props: ChallengesProps) {
  return (
    <Box backgroundColor={"orange.300"} py={8} px={4}>
      <Container
        maxW="container.lg"
        py={8}
        borderRadius={6}
        textAlign={"center"}
      >
        <Heading as="h2" fontSize="4xl" mb={2}>
          ADA APA AJA?
        </Heading>
        <Text maxW="container.sm" mx="auto" fontSize={"lg"} color="orange.50">
          Di <b>FUNDAY</b> ini ada challenge apa aja sih? Terus gimana keseruan
          para <b>SPARTANS</b> dalam mengikuti challenge-nya?
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={4}
          mt={8}
        >
          {props.challenges.map((challenge, index) => (
            <Challenge key={index} number={index + 1} {...challenge} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function Challenge({
  number,
  title,
  slug,
  description,
}: ChallengesProps["challenges"][number] & { number: number }) {
  return (
    <Link href={`/${slug}`} passHref>
      <ChakraLink
        display={"flex"}
        bgColor={"white"}
        p={4}
        alignItems="center"
        rounded={"md"}
        shadow={"md"}
        _hover={{
          textDecoration: "none",
          animation: "jiggle 1s linear infinite",
        }}
      >
        <Text
          fontFamily={"heading"}
          fontSize="5xl"
          pr={4}
          className="number"
          color={"orange.400"}
        >
          {number}
        </Text>
        <Flex direction={"column"} h="full">
          <Heading as="h4" fontSize={"xl"} letterSpacing={2} mb={2}>
            {title}
          </Heading>
          <Text>{description}</Text>
        </Flex>
      </ChakraLink>
    </Link>
  );
}

export default Challenges;
