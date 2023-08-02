import { useFilmAnimation } from "@/src/hooks/useFetchArray";

export const FilmAnimationComponent = () => {
  const { data, error, isLoading } = useFilmAnimation();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul className="grid grid-cols-1 gap-6">
      {data?.items.map((filmAnimation) => {
        return (
          <li key={filmAnimation.id}>
            <iframe
              id="player"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${filmAnimation.id}`}
              frameBorder="0"
            />
          </li>
        );
      })}
    </ul>
  );
};
