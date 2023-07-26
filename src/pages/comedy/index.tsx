import Head from "next/head";
import { ComedyComponent } from "src/components/Comedy";
import { SWRConfig } from "swr";

export const getStaticProps = async () => {
  const COMEDY_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=10&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
  const comedy = await fetch(COMEDY_API_URL);
  const comedyData = await comedy.json();

  return {
    props: {
      fallback: {
        [COMEDY_API_URL]: comedyData,
      },
    },
    revalidate: 86400,
  };
};

const Comedy = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>お笑い</title>
      </Head>
      <SWRConfig value={fallback}>
        <ComedyComponent />
      </SWRConfig>
    </div>
  );
};

export default Comedy;
