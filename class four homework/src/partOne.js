let btn = $("#btn");
let next = $("#next");
console.log(next.html());
btn.click(function () {
  $("table").html("");
  url("https://swapi.dev/api/planets/?page=1");
  $(this).hide();
  next.css("display", "block");
});
next.click(function () {
  $("table").html("");
  url("https://swapi.dev/api/planets/?page=2");
  $(this).hide();
  btn.text("Previous 10");
  btn.show();
});
let url = (url) => {
  $.ajax({
    url: url,
    success: function (response) {
      print(response);
    },
  });
};
let print = (data) => {
  for (let i = 0; i < data.results.length; i++)
    $("table").append(
      `<tr><th>Planet Name</th><th>Population</th><th>Climate</th><th>Gravity</th></tr><tr><td>${data.results[i].name}</td><td>${data.results[i].population}</td><td>${data.results[i].climate}</td><td>${data.results[i].gravity}</td></tr>`
    );
};
