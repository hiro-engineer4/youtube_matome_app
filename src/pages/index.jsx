import Link from "next/link";
import { genreList } from "src/utils/const";

const Index = () => {
  return (
    <ul className="grid grid-cols-2 gap-6">
      {genreList.map((genre) => {
        return (
          <li key={genre.name}>
            <Link href={`/${genre.url}`}>
              <a className="block p-8 shadow rounded hover:bg-gray-100">
                <h1 className="text-xl font-bold truncate">{genre.name}</h1>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Index;
