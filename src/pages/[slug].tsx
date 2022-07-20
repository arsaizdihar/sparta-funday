import { gql } from "graphql-request";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import type { ChallengesProps } from "../components/Challenges";
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
        }
      }
    `,
    variables: { slug },
  });
  return {
    props: {
      challenge: res.challenge as ChallengesProps["challenges"][number],
    },
  };
};

const ChallengePage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  return <div>{JSON.stringify(props)}</div>;
};

export default ChallengePage;
