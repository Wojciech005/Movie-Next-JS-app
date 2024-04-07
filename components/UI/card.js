export default function Card({children, cardClass}){
    return(
        <>
        <div className={`flex min-h-screen flex-col items-center ${cardClass}`}>
            {children}
        </div>
        </>
    )
}