import Head from "next/head";
import { AnimalsComponent } from "src/components/Animals";
import { SWRConfig } from "swr";

export const getStaticProps = async () => {
  const ANIMALS_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=10&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
  const animals = await fetch(ANIMALS_API_URL);
  const animalsData = await animals.json();

  return {
    props: {
      fallback: {
        [ANIMALS_API_URL]: animalsData,
      },
    },
    revalidate: 86400,
  };
};

const Animals = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>動物</title>
      </Head>
      <SWRConfig value={fallback}>
        <AnimalsComponent />
      </SWRConfig>
    </div>
  );
};

export default Animals;
