export default function SelectedMovie({
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
          className={`flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row p-4 my-8 shadow-inner shadow-zinc-500 rounded-lg  bg-gray-600/25 ${cardClass}`}
        >
          <div className="w-full md:w-1/3">
          <img
            src={`http://image.tmdb.org/t/p/w500/${image}`}
            className="w-full rounded"
          />
          </div>  
          <div className="w-full md:w-2/3 md:ps-4">
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
        </li>
      </>
    );
  }
  