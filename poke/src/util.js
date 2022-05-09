
export const createUrl = (url,offset,limit)=>{
    let preUrl = url.split('?')[0];
    return `${preUrl}?limit=${limit}&offset=${offset}`;
}