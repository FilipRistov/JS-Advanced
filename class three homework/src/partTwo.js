let btn = document.getElementById("btn");
let table = document.getElementById("table");
btn.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
      response.json().then(function (data) {
        table.innerHTML = `<tr><th>Id:${data.id}</th><td>Name: ${data.name}</td><td>Username: ${data.username}</td><td>Email: ${data.email}</td><td>Phone: ${data.phone}</td><td>Website: ${data.website}</td></tr>
      <tr><th>Address</th><td>Street: ${data.address.street}</td><td>Suite: ${data.address.suite}</td><td>City: ${data.address.city}</td><td>Zipcode: ${data.address.zipcode}</td><td>Coordinates: ${data.address.geo.lat} ${data.address.geo.lng}</td></tr>
      <tr><th>Company</th><td>Name: ${data.company.name}</td><td colspan="2">Catchphrase: ${data.company.catchPhrase}</td><td colspan = "2">Business Plan: ${data.company.bs}</td></tr>`;
      });
    })
    .catch(function (errResponse) {
      console.log("Error");
    });
});
