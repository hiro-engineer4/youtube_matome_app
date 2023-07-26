import useSWRImmutable from "swr/immutable";
import { fetcher } from "src/utils/fetcher";

const useFetchArray = (url) => {
  const { data, error } = useSWRImmutable(url, fetcher);
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpry: data && data.length === 0,
  };
};

export const useMusic = () => {
  return useFetchArray(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=10&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  );
};

export const useComedy = () => {
  return useFetchArray(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=23&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  );
};

export const useSports = () => {
  return useFetchArray(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=17&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  );
};

export const useFilmAnimation = () => {
  return useFetchArray(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=1&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  );
};

export const useAnimals = () => {
  return useFetchArray(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=15&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  );
};

export const useGaming = () => {
  return useFetchArray(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=20&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  );
};

export const useVlog = () => {
  return useFetchArray(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=22&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  );
};

export const useNews = () => {
  return useFetchArray(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=JP&chart=mostPopular&videoCategoryId=25&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  );
};
