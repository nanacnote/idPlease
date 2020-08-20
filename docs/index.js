const idPlease = require("../dist/index");

$(document).ready(function () {
  $("#vistor-details").on("click", function (e) {
    const foo = idPlease.idPlease();
    console.log(foo);
    $("#stdout").text("pending");
  });
});
