// 表單驗證與送出
document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault(); // 防止頁面刷新

  // 取得欄位值
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;
  const payment = document.getElementById("payment").value;

  // 驗證必填
  if(!name || !phone || !address || !product || !quantity || !payment){
    alert("請填寫所有必填欄位！");
    return;
  }

  // 顯示感謝訊息
  document.getElementById("thankYou").innerText = `感謝您的訂購，${name}！我們將盡快與您聯絡。`;

  // 清空表單
  document.getElementById("orderForm").reset();
});

// 「立即訂購」按鈕 → 滾動到訂單表單
document.querySelectorAll(".order-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.getElementById("order").scrollIntoView({behavior: "smooth"});
  });
});
