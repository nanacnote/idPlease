import { getAll } from "./scripts/examples.getAll";

// handle all js interactions on document ready state
$(document).ready(function () {
  // responsive navbar handler
  $("#navbar-xs-button").on("click", function () {
    $("#navbar-xs-drawer").hasClass("d-none")
      ? $("#navbar-xs-drawer").removeClass("d-none")
      : $("#navbar-xs-drawer").addClass("d-none");
    // clone sidebar into popup menu
    const siderContent = $("#sider-content").clone(true);
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
  $("#sider-content").delegate(".btn-no-decoration", "click", function () {
    const btnCurrentRef = $(this).data("content-ref");
    $("#stage-content").load(`content/${btnCurrentRef}.html`);
    $("#stage-edit-link>a").attr(
      "href",
      `${ROOT_URL}/idPlease/tree/master/docs/content/${btnCurrentRef}.html`
    );
    // adds selected right border stylin
    $(".btn-no-decoration").removeClass("selected-left");
    $(`button[data-content-ref=${btnCurrentRef}]`).addClass("selected-left");
  });

  // capture only stage button clicks and hydrate content as appropriate
  $("#stage").delegate(".btn-no-decoration", "click", function (e) {
    const btnCurrentRef = $(this).data("content-ref");
    switch (btnCurrentRef) {
      case "fullList":
        $("#examples-stage-highlight").empty().append(getAll()); // hydrate by importing and calling the examples.getAll script
        break;
      default:
        break;
    }
  });

  // DEVELOPMENT CODE -- comment out before deployment
  $("#stage-content").load("content/examples.html");
  setTimeout(() => {
    $("#examples-stage-highlight").empty().append(getAll());
  }, 500);
});

// important global variables
const ROOT_URL = "https://github.com/nanacnote";
