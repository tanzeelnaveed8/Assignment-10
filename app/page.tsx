import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  interface myBook {
    name: string;
    type: string;
    id: number;
    available: boolean;
  }

  let res = await fetch('https://simple-books-api.glitch.me/books');
  let data: myBook[] = await res.json();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((book) => {
          return (
            <Link
              href={`/books/${book.id}`}
              key={book.id}
              className="block bg-gray-800 hover:bg-gray-700 p-4 rounded-lg shadow-lg transition transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold">{book.name}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
