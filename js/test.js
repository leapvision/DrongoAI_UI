$(document).ready(function() {
    $("#loadPage2").click(function() {
      $("#main-content").hide();
      $("#page2").load("service-1.html", function() {
        $("#page2").show();
      });
    });
  
    $(document).on("click", "#backButton", function() {
      $("#page2").hide();
      $("#main-content").show();
    });
  });
  