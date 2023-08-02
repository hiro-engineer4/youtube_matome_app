import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { SWRConfig } from "swr";

import { SportsComponent } from "@/src/components/Sports";

export const getStaticProps = async () => {
  const SPORTS_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=10&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
  const sports = await fetch(SPORTS_API_URL);
  const sportsData = await sports.json();

  return {
    props: {
      fallback: {
        [SPORTS_API_URL]: sportsData,
      },
    },
    revalidate: 86400,
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Sports: NextPage<Props> = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>スポーツ</title>
      </Head>
      <SWRConfig value={fallback}>
        <SportsComponent />
      </SWRConfig>
    </div>
  );
};

export default Sports;
