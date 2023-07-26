import { useGaming } from "src/hooks/useFetchArray";

export const GamingComponent = () => {
  const { data, error, isLoading, isEmpry } = useGaming();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpry) {
    return <div>データは空です</div>;
  }

  return (
    <ul className="grid grid-cols-1 gap-6">
      {data.items.map((gaming) => {
        return (
          <li key={gaming.id}>
            <iframe
              id="player"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${gaming.id}`}
              frameBorder="0"
            />
          </li>
        );
      })}
    </ul>
  );
};
