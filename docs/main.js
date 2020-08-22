import { getAllJSON } from "./scripts/example.getAllJSON";

// handle all js interactions on document ready state
$(document).ready(function () {
  // responsive navbar handler
  $("#navbar-xs-button").on("click", function (e) {
    $("#navbar-xs-drawer").hasClass("d-none")
      ? $("#navbar-xs-drawer").removeClass("d-none")
      : $("#navbar-xs-drawer").addClass("d-none");
    // clone sidebar into popup menu
    let siderContent = $("#sider-content").clone(true);
    $("#insert-sider-content").empty().append(siderContent);
  });

  // inject getting started content on load
  $("#stage-content").load("content/gettingStarted.html");
  $("#stage-edit-link>a").attr(
    "href",
    `${ROOT_URL}/idPlease/tree/master/docs/content/gettingStarted.html`
  );
  $('button[data-content-ref="gettingStarted"]').addClass("selected-left");

  // capture only sider button clicks and inject content onto stage
  $("#sider-content").delegate(".btn-no-decoration", "click", function (e) {
    const btnCurrentRef = $(this).data("content-ref");
    $("#stage-content").load(`content/${btnCurrentRef}.html`);
    $("#stage-edit-link>a").attr(
      "href",
      `${ROOT_URL}/idPlease/tree/master/docs/content/${btnCurrentRef}.html`
    );
    // adds selected right border stylin
    $(".btn-no-decoration").removeClass("selected-left");
    $(this).addClass("selected-left");
  });

  // capture only stage button clicks and hydrate content as appropriate
  $("#stage").delegate(".btn-no-decoration", "click", function (e) {
    const btnCurrentRef = $(this).data("content-ref");
    switch (btnCurrentRef) {
      case "getAllJSON":
        $("#example-stage-highlight").empty().html(getAllJSON()); // hydrate by importing and calling the example.getAllJSON sript
        break;
      default:
        break;
    }
  });

  // DEVELOPMENT CODE -- comment out before deployment
  $("#stage-content").load("content/example.html");
  setTimeout(() => {
    $("#example-stage-highlight").empty().html(getAllJSON());
  }, 500);
});

// important global variables
const ROOT_URL = "https://github.com/nanacnote";
