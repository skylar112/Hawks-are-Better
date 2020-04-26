$(document).ready(function(){
  //Allows the use of moment.JS for input on date and year
  var now = moment().format('MMMM Do YYYY');
  console.log(now);
  $("#today").text(now);
  //Button with function that allows the user input from every hour block way below to be saved into local storage
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
     //If statement for if the user input hour block is less than the current time
      if (blockHour < currentHour) 
      {
        $(this).addClass("past"); 
      }

      //else statement if the user input hour is equal to the current time
      else if (blockHour === currentHour)
      {
        $(this).removeClass("past")
        $(this).addClass("present");
      }

      //else statement to remove past and present class, if the input hour is greater than the current time
       else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future");
      }
    })
  }

  //Hour checker allows user input in every hour block below to be storage into local storage
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