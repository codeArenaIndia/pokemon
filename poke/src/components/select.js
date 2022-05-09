const CustomSelect = ({ options, handleChange, filerValue, name, title})=>{
    return (
        <div className="sorting">
            <label htmlFor="select-input" >{title} </label>
            <select name={name} className="select-input" id={name} value={filerValue} onChange={(e)=>handleChange(e)}>
                {
                   options && options.map(item=>{
                       return(
                        <option value={item.value} key={item.value}>{item.text}</option>
                       )
                   }) 
                }
            </select>
        </div>
    );
}
export default CustomSelect;