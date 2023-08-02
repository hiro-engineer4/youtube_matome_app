import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { SWRConfig } from "swr";

import { FilmAnimationComponent } from "@/src/components/FilmAnimation";

export const getStaticProps = async () => {
  const FILMANIMATION_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=10&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
  const filmAnimation = await fetch(FILMANIMATION_API_URL);
  const filmAnimationData = await filmAnimation.json();

  return {
    props: {
      fallback: {
        [FILMANIMATION_API_URL]: filmAnimationData,
      },
    },
    revalidate: 86400,
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const FilmAnimation: NextPage<Props> = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>映画&アニメ</title>
      </Head>
      <SWRConfig value={fallback}>
        <FilmAnimationComponent />
      </SWRConfig>
    </div>
  );
};

export default FilmAnimation;
