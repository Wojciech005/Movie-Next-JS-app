// "use client"
import MainHeader from "@/components/UI/main-header";
import Titles from "@/components/UI/titles";
import Link from "next/link";
import Movies from "../components/movies/movies";

async function getData() {
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home({ items }) {
  const data = await getData();

  console.log(data.results);
  return (
    <main className="flex flex-col items-center justify-between p-4 md:py-12 md:px-24">
      <MainHeader />
      <Movies items={data} />
    </main>
  );
}
