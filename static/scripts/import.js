let importSubmit = document.querySelector("#import-submit");
let importArea = document.querySelector("#import-area");

importSubmit.addEventListener("click", function () {
  let jsonifyData = JSON.parse(importArea.value);
  console.log(jsonifyData)
  for (let i = 0; i < jsonifyData.length; i++) {
    try {
      let item = jsonifyData[i];
      console.log(item)
      localStorage.setItem(item.title, JSON.stringify(item));
    } catch (error) {
      console.log(error);
    }
  }
  window.location.href = "/index.html";
});
