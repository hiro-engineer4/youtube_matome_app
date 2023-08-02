import { useNews } from "@/src/hooks/useFetchArray";

export const NewsComponent = () => {
  const { data, error, isLoading } = useNews();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul className="grid grid-cols-1 gap-6">
      {data?.items.map((news) => {
        return (
          <li key={news.id}>
            <iframe
              id="player"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${news.id}`}
              frameBorder="0"
            />
          </li>
        );
      })}
    </ul>
  );
};
