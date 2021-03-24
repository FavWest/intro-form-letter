$(document).ready(function(){
  $("#name-form").submit(function(event){
    const name= $("input#name").val();
    $("#dear-name").text(name);
    $("#form-letter").show();
    event.preventDefault();
  });
});
