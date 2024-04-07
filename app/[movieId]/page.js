import Button from "@/components/UI/button";
import Card from "@/components/UI/card";
import MainHeader from "@/components/UI/main-header";
import SelectedMovie from "@/components/UI/selected-movie";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  
  return res.json();
}

export default async function Movie({ params }) {
  const data = await getData();

  const movies = data.results;

  let result = movies.filter(item => item.id === parseInt(params.movieId))

  return (
    <>
    <MainHeader headerClass="mt-8 md:mt-16"/>
     <Card cardClass="p-4">
     <Link href="/"><Button buttonBGC="color-white border-2 border-white py-2 hover:bg-white hover:text-black" buttonTitle="Back" /></Link>
      {result.map((item) => (
        <SelectedMovie cardClass={"border-2 border-white w-full md:w-1/2"} key={item.id}  title={item.title}
        overview={item.overview}
        image={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
        rate={item.vote_average.toFixed(2)}
        rateNumber={item.vote_count}
        popularity={item.popularity}/>
        
      ))}
      </Card>
    </>
  );
}
