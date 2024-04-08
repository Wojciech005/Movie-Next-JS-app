"use client";

import Button from "@/components/UI/button";
import ListElement from "@/components/UI/list-element";
import Select from "@/components/UI/select";
import Link from "next/link";
import { useState } from "react";

export default function Movies({ items }) {
  const [data, setData] = useState([]);
  const [isSubMenu, setIsSubMenu] = useState(false);

  function fetchDataHandler() {
    setData(items.results);
    setIsSubMenu(true)

  }
  function cleanDataHandler() {
    setData([]);
    setIsSubMenu(false)
  }
  const movies = data
    .map((item) => (
      <Link className="list-element" href= {`/${item.id}`}  key={item.id}>
      <ListElement
        // key={item.id}
        title={item.title}
        image={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
        rate={item.vote_average.toFixed(2)}
        rateNumber={item.vote_count}
        popularity={item.popularity}
      />
      </Link>
    ));

  function sortDataByOption(e) {
    let sortedData = [...data];
    if (e.target.value === "rate") {
      let newSortedData = sortedData.sort(
        (b, a) => a.vote_average - b.vote_average
      );
      setData(newSortedData);
    } else if (e.target.value === "rate number") {
      let newSortedData = sortedData.sort(
        (b, a) => a.vote_count - b.vote_count
      );
      setData(newSortedData);
    } else if (e.target.value === "popularity") {
      let newSortedData = sortedData.sort(
        (b, a) => a.popularity - b.popularity
      );
      setData(newSortedData);
    }
  }

  return (
    <>
      <div className="flex justify-between mb-10">
        <Button buttonBGC="bg-yellow-400/75 hover:bg-yellow-500" buttonTitle="Fetch Data" buttonHandler={fetchDataHandler} />
        <Button buttonBGC="bg-pink-600/75 hover:bg-pink-700" buttonTitle="Clean Data" buttonHandler={cleanDataHandler} />
      </div>
      {isSubMenu && <section className="flex items-center mb-10">
        <h2 className="text-xl md:text-2xl text-white font-mono me-2 md:me-4">Sort by:</h2>
        <Select selectHandler={sortDataByOption}/>
      </section>}
      <ul className="flex flex-wrap justify-between">
        {movies}
      </ul>
    </>
  );
}
