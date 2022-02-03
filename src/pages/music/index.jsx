import Head from "next/head";
import { MusicComponent } from "src/components/Music";
import { SWRConfig } from "swr";

export const getStaticProps = async () => {
  const MUSIC_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=10&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
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

const Music = (props) => {
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
