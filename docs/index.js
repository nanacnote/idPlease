// const idPlease = require("../dist/index");
import { idPlease } from "../dist/index";
// import types from "../dist";

$(document).ready(function () {
  $("#vistor-details").on("click", function (e) {
    const visitor = new idPlease("hello");
    console.log(visitor._raw());
    $("#stdout").text("pending");
  });
});
