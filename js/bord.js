$( document ).ready(function() {

    $(document).on('submit','form',function(){
        vilken_bord = $('input[name="bord"]:checked').val();
        namn = $('#namn').val();
        if (namn == ""){
            alert("Du behöver skriva in ett namn")
        }
        else{
            $("#"+vilken_bord+ "-div").text(namn+"'s bord")
            $("#"+vilken_bord ).prop( "disabled", true );
            $("#"+vilken_bord+ "-div").css("background-color", "red");
        }
        return false;

    


});
});