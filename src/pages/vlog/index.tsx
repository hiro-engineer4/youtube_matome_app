import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { SWRConfig } from "swr";

import { VlogComponent } from "@/src/components/Vlog";

export const getStaticProps = async () => {
  const VLOG_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=10&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
  const vlog = await fetch(VLOG_API_URL);
  const vlogData = await vlog.json();

  return {
    props: {
      fallback: {
        [VLOG_API_URL]: vlogData,
      },
    },
    revalidate: 86400,
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Vlog: NextPage<Props> = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>Vlog</title>
      </Head>
      <SWRConfig value={fallback}>
        <VlogComponent />
      </SWRConfig>
    </div>
  );
};

export default Vlog;
