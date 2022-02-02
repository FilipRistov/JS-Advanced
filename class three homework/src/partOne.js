$("#btn").click(function () {
  $.ajax({
    url: "https://api.openaq.org/v1/cities ",
    success: function (response) {
      for (let i = 0; i < 10; i++) {
        $("ul").append(
          `<li>Country: ${response.results[i].country}<br> City: ${response.results[i].name}<br> Locations: ${response.results[i].locations}</li><br>`
        );
      }
    },
    err: function (errResponse) {
      console.log("Error");
      console.log(errResponse);
    },
  });
});
