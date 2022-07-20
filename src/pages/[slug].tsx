/* eslint-disable @next/next/no-img-element */
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { gql } from "graphql-request";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Link from "next/link";
import { request } from "../utils/request";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await request({
    query: gql`
      query {
        allChallenges(first: 100) {
          slug
        }
      }
    `,
  });

  return {
    paths: res.allChallenges.map((challenge: any) => ({
      params: { slug: challenge.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const slug = ctx.params?.slug as string;
  const res = await request({
    query: gql`
      query Challenge($slug: String!) {
        challenge(filter: { slug: { eq: $slug } }) {
          title
          description
          slug
          kesan {
            value
          }
          dokumentasi {
            mimeType
            url
          }
        }
      }
    `,
    variables: { slug },
  });
  console.log(res.challenge.dokumentasi);
  return {
    props: {
      challenge: res.challenge as {
        title: string;
        description: string;
        slug: string;
        kesan: { value: string }[];
        dokumentasi: { mimeType: string; url: string }[];
      },
    },
  };
};

const ChallengePage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ challenge }) => {
  return (
    <Container maxW="container.lg" px={4} py={8}>
      <Flex gap={8}>
        <Link href={`/#${challenge.slug}`} passHref>
          <Button colorScheme={"yellow"} variant="solid" as="a">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={4}
              style={{ width: "1rem" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Button>
        </Link>
        <Heading>{challenge.title}</Heading>
      </Flex>
      <Flex>
        <Text
          fontSize={"lg"}
          bgColor={"orange.500"}
          fontWeight="medium"
          color={"white"}
          rounded="md"
          shadow="lg"
          p={4}
          mt={4}
          mx={"auto"}
        >
          {challenge.description}
        </Text>
      </Flex>
      <Box
        bgColor={"white"}
        rounded="md"
        shadow="lg"
        px={4}
        py={6}
        mt={8}
        fontSize="lg"
      >
        {challenge.kesan.length === 1 ? (
          <Text>{challenge.kesan[0].value}</Text>
        ) : (
          <List>
            {challenge.kesan.map((kesan, idx) => (
              <ListItem key={idx} display="flex">
                <ListIcon
                  as={CheckCircleIcon}
                  color={"orange.300"}
                  mt={1}
                  flexShrink={0}
                />
                {kesan.value}
              </ListItem>
            ))}
          </List>
        )}

        {challenge.dokumentasi.length > 0 && (
          <Heading as={"h2"} textAlign="center" mt={8}>
            DOKUMENTASI
          </Heading>
        )}

        <Flex justifyContent={"center"} flexWrap={"wrap"} gap={4} mt={4}>
          {challenge.dokumentasi.map((dokumentasi, idx) =>
            dokumentasi.mimeType.startsWith("image") ? (
              <img
                key={idx}
                alt="dokumentasi"
                src={dokumentasi.url}
                loading="lazy"
                width={400}
              />
            ) : (
              <video width={400} controls>
                <source src={dokumentasi.url} type={dokumentasi.mimeType} />
              </video>
            )
          )}
        </Flex>
      </Box>
    </Container>
  );
};

export default ChallengePage;
