import Link from "next/link";

import { genreList, GenreListTypes } from "../utils/const";

const Index = () => {
  return (
    <ul className="grid grid-cols-2 gap-6">
      {genreList.map((genre: GenreListTypes) => {
        return (
          <li key={genre.name}>
            <Link
              href={`/${genre.url}`}
              className="block p-8 shadow rounded hover:bg-gray-100"
            >
              <h1 className="text-xl font-bold truncate">{genre.name}</h1>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Index;
