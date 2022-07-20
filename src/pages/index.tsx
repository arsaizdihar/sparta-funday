import { gql } from "graphql-request";
import type { InferGetStaticPropsType, NextPage } from "next";
import About from "../components/About";
import Challenges, { ChallengesProps } from "../components/Challenges";
import { request } from "../utils/request";

export const getStaticProps = async () => {
  const res = await request({
    query: gql`
      query {
        allChallenges(orderBy: createdAt_ASC, first: 100) {
          title
          description
          slug
        }
      }
    `,
  });
  return {
    props: {
      challenges: res.allChallenges,
    } as ChallengesProps,
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  challenges,
}) => {
  return (
    <>
      <About />
      <Challenges challenges={challenges} />
    </>
  );
};

export default Home;
