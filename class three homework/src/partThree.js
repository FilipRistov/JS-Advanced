let btn = $("#btn");
btn.click(function () {
  $.ajax({
    url: "https://dog.ceo/api/breed/hound/images",
    success: function (response) {
      for (let image of response.message) {
        $("div").append(`<img src="${image}" width="100px" height="100px"/>`);
      }
    },
    err: function (response) {
      console.log("The request failed");
      console.log(response);
    },
  });
});
