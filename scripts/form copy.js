


jQuery("#flight").on("submit",function(event){
    event.preventDefault();
    
     const flight={
        airline:jQuery("#airline").val(),
        source:jQuery("#source").val(),
        destination:jQuery("#destination").val(),
        departuretime:jQuery("#departuretime").val(),
        fare:jQuery("#fare").val(),
        image:jQuery("#image").val(),
     }
     if (isNaN(flight.fare)){
        //alert("fareshouldbe numeric");
        jQuery(".fare-wrapper").find(".error").text("fareshould be numeric")
        return
     }
     console.log(flight)
})