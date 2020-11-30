$( document ).ready(function() {

    $(document).on('submit','form',function(){
        $("#hidden-div").fadeIn();
        $("#hidden-div").delay(4000).fadeOut(); 
    return false;

});
});