
const Pagination = ({navigation, handlePagination, handleReset}) =>{
    let {offset, count, limit, next, previous} = navigation;
    return (
        <div className="nav-box">
             <label className="footer-label">{offset !== 'undefined' ? `Showing ${offset} to ${parseInt(offset)+parseInt(limit)} of ${count}` : ''}</label>
            <div className="pagination">
                <button className="nav-btn" onClick={(e)=>{handleReset(e)}}>Reset</button>
                <button className="nav-btn" disabled={!previous ? true : false} url={previous} onClick={(e)=>{handlePagination(e)}}>Previous</button>
                <button className="nav-btn" disabled={!next ? true : false}  url={next} onClick={(e)=>{handlePagination(e)}}>Next</button>
            </div>
        </div>
    )
}
export default Pagination