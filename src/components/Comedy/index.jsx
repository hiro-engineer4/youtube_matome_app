import { useComedy } from "src/hooks/useFetchArray";

export const ComedyComponent = () => {
  const { data, error, isLoading, isEmpry } = useComedy();
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
      {data.items.map((comedy) => {
        return (
          <li key={comedy.id}>
            <iframe
              id="player"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${comedy.id}`}
              frameBorder="0"
            />
          </li>
        );
      })}
    </ul>
  );
};
