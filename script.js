$(document).ready(function(){
  var now = moment().format('MMMM Do YYYY');
  console.log(now);
  $("#today").text(now);

  $(".save-btn").on("click", function(){
    var activity = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(time);


    localStorage.setItem(time, activity);
    console.log(localStorage);
    
  })
  //create a function that compares our hour to moments hour.  If statement that add class of past, present or future.
  function hourChecker() {
    var currentHour = moment().hours();
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
     
      if (blockHour < currentHour) {
        $(this).addClass("past");
      }
      else if (blockHour === currentHour){
        $(this).removeClass("past")
        $(this).addClass("present");
      }
       else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future");
        }
    })
  }
  hourChecker();

  $("#hr-9 .description").val(localStorage.getItem("hr-9"));

  $("#hr-10 .description").val(localStorage.getItem("hr-10"));

  $("#hr-11 .description").val(localStorage.getItem("hr-11"));

  $("#hr-12 .description").val(localStorage.getItem("hr-12"));

  $("#hr-1 .description").val(localStorage.getItem("hr-1"));

  $("#hr-2 .description").val(localStorage.getItem("hr-2"));

  $("#hr-3 .description").val(localStorage.getItem("hr-3"));

  $("#hr-4 .description").val(localStorage.getItem("hr-4"));

  $("#hr-5 .description").val(localStorage.getItem("hr-5"));

  
    
    




})