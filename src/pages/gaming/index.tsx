import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { SWRConfig } from "swr";

import { GamingComponent } from "@/src/components/Gaming";

export const getStaticProps = async () => {
  const GAMING_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=10&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
  const gaming = await fetch(GAMING_API_URL);
  const gamingData = await gaming.json();

  return {
    props: {
      fallback: {
        [GAMING_API_URL]: gamingData,
      },
    },
    revalidate: 86400,
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Gaming: NextPage<Props> = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>ゲーム</title>
      </Head>
      <SWRConfig value={fallback}>
        <GamingComponent />
      </SWRConfig>
    </div>
  );
};

export default Gaming;
