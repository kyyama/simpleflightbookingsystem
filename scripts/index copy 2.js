
let flightCards="";
for(let i=1;i<4;i++){
    const flightCard =`<div class="col-4">
<div class="card mb-3" >
    <div class="row g-0">
      <div class="col-md-4">
        <img src="/images/air-india.jpg" class="img-fluid rounded-start airline-image" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Air India ${i}</h5>
          <p class="card-text">From:Delhi, To:Bangloore</p>
          <p class="card-text">Fare:1200</p>
          <p class="card-text"><small class="text-muted">Departure:09:00hours</small></p>
        </div>
      </div>
    </div>
  </div>
</div>

`;

    flightCards=flightCards+flightCard;
}
jQuery(".flights").html(flightCards)


