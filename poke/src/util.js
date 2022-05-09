
export const  customSearch = (items, searchParam, query) => {
    let output =  items && items.filter((item) => {
        return item && searchParam.some((newItem) => {
            return (
                item['props'][newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(query.toLowerCase()) > -1
            );
        });
    });
    return output;
}

export const customSort = (filerValue,output)=>{
    let split = filerValue.split('-')
    let type = split[0];
    let subtype= split[1];
    let sort = output.sort((a, b) => a['props'][type] > b['props'][type] ? 1 : -1);
    if(subtype === 'desc'){
        sort = output.sort((a, b) => a['props'][type] < b['props'][type] ? 1 : -1);
    }
    return sort;
  }

export const extractParamFromUrl = (url, param) =>{
    let res = 0;
    let paramString = url.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    for (let pair of queryString.entries()) {
        if(param === pair[0]){
            res= pair[1];
            break;
        }
     }
     return res;
}

export const createUrl = (url,offset,limit)=>{
    let preUrl = url.split('?')[0];
    return `${preUrl}?limit=${limit}&offset=${offset}`;
}