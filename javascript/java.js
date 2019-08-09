// api key for this project BfAhixioS9iJQctYVh6YC8qj8xzMIlQt

// Example of query URL
// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

// ============================================================================================
// ============================================================================================
// Variable for Api Key
const APIKEY = "BfAhixioS9iJQctYVh6YC8qj8xzMIlQt";
// Variable for User input
let term = document.getElementById("searchTerm");
let records = document.getElementById("numRecords");
let startyYear = document.getElementById("exampleFormControlInput1");
let endYear = document.getElementById("exampleFormControlInput2");

// link to grab information
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election" 
                + term + "&" + records + "&" +startyYear + "&" + endYear + "&api-key=" + APIKEY;


    // * Take note of various “bugs” that appear with certain searches.


fetch(queryURL).then(function(response) {
    return response.json();
    }).then(function(responseJson) {
    console.log(responseJson);

    // document.querySelector("#movie-view").innerHTML = JSON.stringify(responseJson);
    // console.log(document.querySelector("#movie-view"));
    })