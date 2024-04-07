export default function Button ({buttonBGC, buttonHandler, buttonTitle}) {
    return(
        <>
        <button
          className={`text-xl md:text-2xl shadow font-mono  rounded-lg shadow-white text-white  p-3  md:p-4 mt-5 mx-1 md:mx-3 ${buttonBGC}`}
          onClick={buttonHandler}
        >
          {buttonTitle}
        </button>
        </>
    )
}