import { useMusic } from "src/hooks/useFetchArray";

export const MusicComponent = () => {
  const { data, error, isLoading, isEmpry } = useMusic();
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
      {data.items.map((music) => {
        return (
          <li key={music.id}>
            <iframe
              id="player"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${music.id}`}
              frameBorder="0"
            />
          </li>
        );
      })}
    </ul>
  );
};
