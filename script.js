$(document).ready(function(){

  $(".save-btn").on("click", function(){
    var activity = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(time);


    localStorage.setItem(time, activity);
    console.log(localStorage);
    
  })
  var currentHour = momemt().hours()
  var blockHour = parseInt($(this).attr("id").split("-")[1])
  //create a function that compares our hour to moments hour.  If statement that add class of past, present or future.

  $("#hr-9 .description").val(localStorage.getItem("hr-9"))

  $("#hr-10 .description").val(localStorage.getItem("hr-10"))

  $("#hr-11 .description").val(localStorage.getItem("hr-11"))

  $("#hr-12 .description").val(localStorage.getItem("hr-12"))

  $("#hr-1 .description").val(localStorage.getItem("hr-1"))

  $("#hr-2 .description").val(localStorage.getItem("hr-2"))

  $("#hr-3 .description").val(localStorage.getItem("hr-3"))

  $("#hr-4 .description").val(localStorage.getItem("hr-4"))

  $("#hr-5 .description").val(localStorage.getItem("hr-5"))

  
    
    




})