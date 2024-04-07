import Image from "next/image";

export default function ListElement({
  title,
  overview,
  rate,
  rateNumber,
  image,
  popularity,
  cardClass
}) {
  return (
    <>
      <li
        className={`flex flex-col flex-wrap justify-between p-4 my-4 md:my-8 shadow-inner shadow-zinc-500 rounded-lg  bg-gray-600/25 ${cardClass}`}
      >
        <div className="h-1/2 min-h-60">
          <h1 className="text-2xl text-white font-mono mb-3">{title}</h1>
          <p className=" text-white font-mono mb-5">{overview}</p>
          <h4 className=" text-white font-mono mb-5">
            Popularity: <span className="text-xl font-semibold">{Math.round(popularity)}</span>
          </h4>
          <h4 className=" text-white font-mono mb-5">
            Rate: <span className="text-xl font-semibold">{rate}</span>
          </h4>
          <h4 className=" text-white font-mono mb-5">
            Number of ratings:{" "}
            <span className="text-xl font-semibold">{rateNumber}</span>
          </h4>
        </div>
        <div className="h-1/2 md:max-h-72">
        <img
          src={`http://image.tmdb.org/t/p/w500/${image}`}
          className="md:max-h-72 w-full rounded"
        />
        </div>
      </li>
    </>
  );
}
