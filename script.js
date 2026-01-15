// 首頁表單互動
document.getElementById("btnGreet")?.addEventListener("click", () => {
  const name = document.getElementById("name").value; // 取得輸入框文字
  document.getElementById("greeting").innerText =
    name ? `歡迎你，${name}！` : "請先輸入名字哦～"; // 顯示訊息
});

// 第二頁表單互動
document.getElementById("btnGreet2")?.addEventListener("click", () => {
  const name = document.getElementById("name2").value; // 取得輸入框文字
  document.getElementById("greeting2").innerText =
    name ? `歡迎你來到第二頁，${name}！` : "請先輸入名字哦～"; // 顯示訊息
});

// 實時日期時間
function updateDateTime() {
  const now = new Date(); // 取得現在時間
  const datetime = `現在時間：${now.toLocaleDateString()} ${now.toLocaleTimeString()}`; // 格式化
  document.getElementById("datetime")?.innerText = datetime; // 顯示在頁面上
}
setInterval(updateDateTime, 1000); // 每秒更新一次
updateDateTime(); // 頁面載入立即顯示
