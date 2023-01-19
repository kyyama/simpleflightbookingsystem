jQuery.ajax({
  url: "http://localhost:3000/flights",
  success: function (res) {
    console.log(res);
    renderFlightCards(res);
  },
  error: function (err) {},
});
function renderFlightCards(flights) {
  let flightCards = "";
  for (let i = 0; i < flights.length; i++) {
    const flightCard = `<div class="col-4">
<div class="card mb-3" >
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${flights[i].image}" class="img-fluid rounded-start airline-image" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"> ${flights[i].airline}</h5>
          <p class="card-text">From:${flights[i].source}, To:${flights[i].destination}</p>
          <p class="card-text">Fare:${flights[i].fare}</p>
          <p class="card-text"><small class="text-muted">Departure:${flights[i].departuretime} hours</small></p>
        <div>
        <a href="/form.html?id=${flights[i].id}" class="btn btn-warning btn-sm">Edit</a> 
        <button class="btn btn-danger btn-sm btn-delete" data-id="${flights[i].id}">Delete</button>
        </div>
          </div>
      </div>
    </div>
  </div>
</div>

`;

    flightCards = flightCards + flightCard;
  }
  jQuery(".flights").html(flightCards);
}
