


function displayInfo (event) {
   var termPH = $(this).attr(".ph1");
   var numberRecordsPH = $(this).attr(".ph2");
   var startYearPH = $(this).attr(".ph3");
   var endYearPH = $(this).attr(".ph4");
}

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q= " + searchTerm + " ?begin_date= " +
startYear + " ?end_date= " + endYear + "&api_key=LexfnmIFJ3eXRgWAQPlvogP9hyiEEGfJ"







$.ajax({
    url: queryUrl,
    method: 'GET',
}).then(function (response) {
    console.log(response);