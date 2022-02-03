import { useAnimals } from "src/hooks/useFetchArray";

export const AnimalsComponent = () => {
  const { data, error, isLoading, isEmpry } = useAnimals();
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
      {data.items.map((animals) => {
        return (
          <li key={animals.id}>
            <iframe
              id="player"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${animals.id}`}
              frameBorder="0"
            />
          </li>
        );
      })}
    </ul>
  );
};
