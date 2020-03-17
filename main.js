var btn = document.getElementById("btn");
var msgBox = document.getElementById("msgBox");

btn.addEventListener("click", function() {
  var result = window.confirm("どちらかを選んでね！");
  if (result) {
    console.log("OK");
    msgBox.innerText = "OK";
  } else {
    console.log("キャンセル");
    msgBox.innerText = "キャンセル";
  }
});
