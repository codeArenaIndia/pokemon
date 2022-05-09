const CustomSearch =({handleChange,value, name })=>{
    return (
        <div className="search">
            <label htmlFor="search" >Search</label>
             <input
                type="search"
                name={name}
                id={name}
                className="search-input"
                placeholder="Search for..."
                value={value}
                onChange={handleChange}
            />   
        </div>
            
    )
}
export default CustomSearch;