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
    <Box py={8} px={4}>
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
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
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
        id={slug}
        scrollMarginTop={48}
        display={"flex"}
        bgColor={"white"}
        alignItems="center"
        roundedRight={"md"}
        shadow={"lg"}
        _hover={{
          textDecoration: "none",
          animation: "jiggle 1s linear infinite",
        }}
      >
        <Flex
          h="full"
          alignItems={"center"}
          bgColor="orange.200"
          px={3}
          borderWidth={2}
          borderColor="orange.900"
        >
          <Text
            fontFamily={"heading"}
            fontSize="4xl"
            w={4}
            className="number"
            color={"orange.400"}
            lineHeight={1}
          >
            {number.toString().padStart(2, "0")}
          </Text>
        </Flex>
        <Flex
          direction={"column"}
          flexGrow={1}
          h="full"
          py={4}
          px={2}
          borderWidth={3}
          borderLeftWidth={0}
          borderColor="orange.900"
          roundedRight={"md"}
        >
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
