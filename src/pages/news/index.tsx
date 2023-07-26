import Head from "next/head";
import { NewsComponent } from "src/components/News";
import { SWRConfig } from "swr";

export const getStaticProps = async () => {
  const NEWS_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=10&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
  const news = await fetch(NEWS_API_URL);
  const newsData = await news.json();

  return {
    props: {
      fallback: {
        [NEWS_API_URL]: newsData,
      },
    },
    revalidate: 86400,
  };
};

const News = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>ニュース</title>
      </Head>
      <SWRConfig value={fallback}>
        <NewsComponent />
      </SWRConfig>
    </div>
  );
};

export default News;
