import { idPlease } from "../dist/index";

// handle all js interactions on document ready state
$(document).ready(function () {
  // responsive navbar handler
  $("#navbar-xs-button").on("click", function (e) {
    $("#navbar-xs-drawer").hasClass("d-none")
      ? $("#navbar-xs-drawer").removeClass("d-none")
      : $("#navbar-xs-drawer").addClass("d-none");
    // clone sidebar into popup menu
    let siderContent = $("#sider-content").clone(true);
    $("#insert-sider-content").empty().html(siderContent);
  });

  // inject getting started content on load
  $("#stage").load("content/gettingStarted.html");

  // inject examples content on button click
  $(".examples-btn").on("click", function (e) {
    // $("#stage").text(idPlease.showAll());
    $("#stage").load("content/example.html");
  });
});
