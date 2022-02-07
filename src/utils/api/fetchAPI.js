export const API_URI = process.env.REACT_APP_API_URI
export const fetchAPI = (url, options) => 
  fetch(API_URI+url, options)
