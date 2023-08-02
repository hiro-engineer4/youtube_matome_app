import { useSports } from "@/src/hooks/useFetchArray";

export const SportsComponent = () => {
  const { data, error, isLoading } = useSports();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul className="grid grid-cols-1 gap-6">
      {data?.items.map((sports) => {
        return (
          <li key={sports.id}>
            <iframe
              id="player"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${sports.id}`}
              frameBorder="0"
            />
          </li>
        );
      })}
    </ul>
  );
};
