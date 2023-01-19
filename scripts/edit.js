//console.log(window.location)
console.log(window.location.search)
const searchQuery=window.location.search;
const searchQuerySplitted=searchQuery.split("?id=");
console.log(searchQuerySplitted[1]);
const searchQueryId=searchQuerySplitted[1];
if(!searchQueryId){
   
}
else{
    jQuery.ajax({
        url:"http://localhost:3000/flights/"+searchQueryId,
        method:"GET",
        success:function(res){
       console.log(res);
       jQuery('#airlineId').val(res.id);
       jQuery("#airline").val(res.airline);
        jQuery("#source").val(res.source);
        jQuery("#destination").val(res.destination);
       jQuery("#departuretime").val(res.departuretime);
        jQuery("#fare").val(res.fare),
        jQuery("#image").val(res.image);
        },
        error:function(err){
    
        }
    
    })

}

