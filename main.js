let btn = document.getElementById("btn");
let msgBox = document.getElementById("msgBox");

btn.addEventListener("click", () => {
  let result = window.confirm("どちらかを選んでね！");
  if (result) {
    console.log("OK");
    msgBox.innerText = "OK";
  } else {
    console.log("キャンセル");
    msgBox.innerText = "キャンセル";
  }
});

let repBtn = document.getElementById("rep-btn");

repBtn.addEventListener("click", () => {
  console.log("repBtnがクリックされた");
  let refTxtVal = document.getElementById("reference-txt").value;
  let orgKey = document.getElementById("original-key").value;
  let orgKeyMatch = new RegExp(
    document.getElementById("original-key").value,
    "g"
  );
  let repKey = document.getElementById("replace-key").value;
  let resArea = document.getElementById("result");
  //キーワードマッチ数

  let count = (refTxtVal.match(orgKeyMatch) || []).length;
  //未入力チェック
  if (orgKey == "" || repKey == "" || refTxtVal == "") {
    window.alert("未入力欄があります");
    return;
  }
  // 結果表示
  resArea.innerText = `ワードヒット数:${count}件\n${refTxtVal.replace(
    orgKeyMatch,
    repKey
  )}`;
});
