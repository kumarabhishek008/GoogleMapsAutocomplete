export const APP_URL = (place)=> `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${place}&key=`+process.env.REACT_APP_MAP_API