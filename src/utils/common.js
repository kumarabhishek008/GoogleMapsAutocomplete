

export const request = (url, data) => { 
    const header = new Headers();
    header.append('content-type', 'application/json')
    const newData = {
        headers : header,
        ...data
    }
    return fetch(url, newData)
    .then((resp)=>resp.json())
    .then(response=>response)
    .catch((error)=>error)
}

// debounce method
export function debounceMethod (cb, delay=1000){
    let timeout
    return (...args) =>{
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(()=>{
            timeout = null
           cb(...args)
       },delay)
   }
}