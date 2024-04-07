export default function MainHeader ({headerClass}) {
const headerClasses = "text-2xl md:text-4xl text-white font-mono mb-2";
  return (
    <>
      <header className={`md:mb-2 mt-4 ${headerClass}`}>
        <div className="text-center">
          <div className="flex flex-nowrap md:flex-wrap justify-center">
            <h1 className="text-2xl md:text-4xl uppercase font-semibold  text-rose-600 font-mono me-8">
              Devflix
            </h1>
            <h1 className={headerClasses}>Movie app</h1>
          </div>
          <h1 className={headerClasses}>
            Check out the best movies ever!
          </h1>
        </div>
      </header>
    </>
  );
}