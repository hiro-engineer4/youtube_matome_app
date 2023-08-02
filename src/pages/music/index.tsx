import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { SWRConfig } from "swr";

import { MusicComponent } from "@/src/components/Music";

export const getStaticProps = async () => {
  const MUSIC_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=10&maxResults=3&key=${process.env.YOUTUBE_API_KEY}`;
  const music = await fetch(MUSIC_API_URL);
  const musicData = await music.json();

  return {
    props: {
      fallback: {
        [MUSIC_API_URL]: musicData,
      },
    },
    revalidate: 86400,
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Music: NextPage<Props> = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>音楽</title>
      </Head>
      <SWRConfig value={fallback}>
        <MusicComponent />
      </SWRConfig>
    </div>
  );
};

export default Music;
