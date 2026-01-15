// 首頁互動
document.getElementById("btnGreet")?.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  document.getElementById("greeting").innerText =
    name ? `歡迎你，${name}！` : "請先輸入名字哦～";
});

// 第二頁互動
document.getElementById("btnGreet2")?.addEventListener("click", () => {
  const name = document.getElementById("name2").value;
  document.getElementById("greeting2").innerText =
    name ? `歡迎你來到第二頁，${name}！` : "請先輸入名字哦～";
});

// 實時日期時間
function updateDateTime() {
  const now = new Date();
  const datetime = `現在時間：${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  document.getElementById("datetime")?.innerText = datetime;
}
setInterval(updateDateTime, 1000);
updateDateTime();