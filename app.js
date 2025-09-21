/* First Request using fetch
this method return promise in foorm of response object
api calls are working asynchronously
  */
 let url = "https://catfact.ninja/fact";
 fetch(url)
 .then((response) => {
    console.log("accepted",response);
    // response.json().then((data) => {
    //     console.log(data); })
    return response.json();
})
.then((data) => {
    console.log(data.fact)
    console.log(data)
    return fetch(url);
})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.fact)
    console.log(data)
    return fetch(url)
})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.fact)
    console.log(data)
})
 .catch((error) => {
    console.log("rejected",error)
 })