document.addEventListener("deviceready", function () {
  navigator.splashscreen.hide();
})
var app = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout" });