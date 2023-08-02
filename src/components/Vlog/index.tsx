import { useVlog } from "@/src/hooks/useFetchArray";

export const VlogComponent = () => {
  const { data, error, isLoading } = useVlog();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul className="grid grid-cols-1 gap-6">
      {data?.items.map((vlog) => {
        return (
          <li key={vlog.id}>
            <iframe
              id="player"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${vlog.id}`}
              frameBorder="0"
            />
          </li>
        );
      })}
    </ul>
  );
};
