function applyTransformations() {
  $('.small-card:nth-child(4)').css('transform', 'translate(120%, -160%)');
  $('.small-card:nth-child(5)').css('transform', 'translate(120%, 50%)');
  $('.small-card:nth-child(2)').css('transform', 'translate(-230%, 50%)');
  $('.small-card:nth-child(3)').css('transform', 'translate(-230%, -150%)');
  $('.small-card:nth-child(6)').css('transform', 'translate(-50%, -250%)');
  $('.small-card:nth-child(7)').css('transform', 'translate(-50%, 150%)');
}


$(document).ready(function() {
  $("#loadPage1").click(function(event) {
    event.preventDefault(); // Prevent the default behavior of anchor tags
    $("#page2").addClass("hidden").removeClass("visible");
    $("#main-content-service").hide();
   
    $("#page2").load("services-1.html", function() {
      $("#page2").addClass("visible").removeClass("hidden");
      $("#page2").show();
     
        $("#services_section").css("padding-top", "80px");
        $('html, body').animate({
            scrollTop: $('#services_section').offset().top
        }, 100); 
        
        applyTransformations()
    });

   

});

$("#loadPage2").click(function(event) {
  event.preventDefault(); // Prevent the default behavior of anchor tags
  $("#page2").addClass("hidden").removeClass("visible");
  $("#main-content-service").hide();
  
  $("#page2").load("services-2.html", function() {
    $("#page2").addClass("visible").removeClass("hidden");
      $("#page2").show();
      $("#services_section").css("padding-top", "80px");
      $('html, body').animate({
          scrollTop: $('#services_section').offset().top
      }, 100); 
      applyTransformations();
      
      
  });
});

$("#loadPage3").click(function(event) {
  event.preventDefault(); // Prevent the default behavior of anchor tags
  
  $("#main-content-service").hide();
  $("#page2").addClass("hidden").removeClass("visible");
  $("#page2").load("services-3.html", function() {
    $("#page2").addClass("visible").removeClass("hidden");
      $("#page2").show();
      $("#services_section").css("padding-top", "80px");
      $('html, body').animate({
          scrollTop: $('#services_section').offset().top
      }, 100); 
      applyTransformations()
  });
});
  
    $(document).on("click", "#backButton", function() {
      $("#page2").hide();
      $("#main-content-service").show();
      $("#services_section").css("padding-top", "200px");
      
    });
  });
  