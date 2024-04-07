export default function Select ({selectHandler}) {
    return(
        <>
        <select className="p-3 md:p-4 rounded font-mono" onChange={selectHandler} >
          <option value="please select">Please select</option>
          <option value="rate">Rate</option>
          <option value="rate number">Number of ratings</option>
          <option value="popularity">Popularity</option>
        </select>
        
        </>
    )
}