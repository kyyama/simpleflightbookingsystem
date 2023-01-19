

 const options={}
 const deleteModal = new bootstrap.Modal('#deleteModal', options);
jQuery(document).on("click",".btn-delete",function(){
   // alert("ok")
   const flightId=jQuery(this).attr("data-id");
   //const verify=confirm("are you sure you want to delete this flight")
   jQuery("#deleteModal").find(".btn-yes").attr("data-id" ,flightId)
   deleteModal.show();
   


})
jQuery(document).on("click","#deleteModal .btn-yes",function(){
    const flightId=jQuery(this).attr("data-id");
    jQuery.ajax({
        url:"http://localhost:3000/flights/"+flightId,
        method:"DELETE",
        success:function(res){
         deleteModal.hide();
         window.location.reload();
        },
        error:function(err){

        }


    })
})