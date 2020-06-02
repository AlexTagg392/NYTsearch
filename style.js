
$("#search-articles").on("click", function (event) {

    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();

    // Here we grab the text from the input box
    var search = $("#search-term").val();

    // Here we construct our URL
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=VrOG8gW50DUfopPJolmyHajAbM9L634I";
    //var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=VrOG8gW50DUfopPJolmyHajAbM9L634I"
    console.log(queryURL);
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      raySon = JSON.stringify(response);
      console.log(response);
      
      console.log(response.docs[3].web_url);
    });

});