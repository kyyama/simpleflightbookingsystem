


jQuery("#flight").validate({
    rules:{
        airline:{
            required:true
        },
        fare:{
            required:true,
            number:true
        }
    },
    messages:{
    airline:{
        required:"the airline name is required"
    }
    },
    submitHandler:function(form,event){
        event.preventDefault();
        const flight={
            airline:jQuery("#airline").val(),
            source:jQuery("#source").val(),
            destination:jQuery("#destination").val(),
            departuretime:jQuery("#departuretime").val(),
            fare:jQuery("#fare").val(),
            image:jQuery("#image").val(),
         }
         const airlineId=jQuery("#airlineId").val();
         
         console.log(flight)
         if(airlineId){
            jQuery.ajax({
                url:"http://localhost:3000/flights/"+airlineId,
                method:"PUT",
                data:flight,
                success:function(res){
               console.log(res);
               window.location.href="http://127.0.0.1:5500"
                },
                error:function(err){
    
                }
             })
         }
         else{
            jQuery.ajax({
                url:"http://localhost:3000/flights",
                method:"POST",
                data:flight,
                success:function(res){
               console.log(res);
               window.location.href="http://127.0.0.1:5500"
                },
                error:function(err){
    
                }
             })

         }
         
    }
})