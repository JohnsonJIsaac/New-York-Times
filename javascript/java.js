// api key for this project BfAhixioS9iJQctYVh6YC8qj8xzMIlQt

// Example of query URL
// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

// ============================================================================================
// ============================================================================================
// Variable for Api Key
const APIKEY = "BfAhixioS9iJQctYVh6YC8qj8xzMIlQt";
    // * Take note of various “bugs” that appear with certain searches.

    document.querySelector(".btn.submit.mb-2").addEventListener("click", function(event) {
        console.log(event);
        event.preventDefault();

        let term = document.getElementById("searchTerm").value;
        let records = document.getElementById("numRecords").value;
        let startyYear = document.getElementById("exampleFormControlInput1").value;
        let endYear = document.getElementById("exampleFormControlInput2").value;

        // link to grab information
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election" 
                        + term + "&" + records + "&" +startyYear + "&" + endYear + "&api-key=" + APIKEY;

        console.log(queryURL);
            // event.preventDefault();

           
            fetch(queryURL).then(function(response) {
                return response.json();
                }).then(function(responseJson) {
                console.log(responseJson);
        
                // document.querySelector("#movie-view").innerHTML = JSON.stringify(responseJson);
                // console.log(document.querySelector("#movie-view"));
                console.log(queryURL);

                })
    })

    document.querySelector(".btn.reset.mb-2").addEventListener("click", function(event) {
        console.log(event);
        event.preventDefault();
            // event.preventDefault();
            term.innerHTML = "";
            records.innerHTML = "";
            startyYear.innerHTML = "";
            endYear.innerHTML -="";
    })

    // fetch(queryURL).then(function(response) {
    //     return response.json();
    //     }).then(function(responseJson) {
    //     console.log(responseJson);

    //     // document.querySelector("#movie-view").innerHTML = JSON.stringify(responseJson);
    //     // console.log(document.querySelector("#movie-view"));
    //     })