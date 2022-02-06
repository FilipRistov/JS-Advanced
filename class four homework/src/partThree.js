let fname = ["Filip", "John", "Johnny", "Marc", "Clara"];
let lname = ["Ristov", "Smith", "Smithy", "Anthony", "Croft"];
(function () {
  for (let i = 0; i < 5; i++) {
    $("body").append(`<h5>${fname[i]} ${lname[i]}</h5>`);
  }
})();
