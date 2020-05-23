let imgSubmit = document.getElementById("image-submit");
imgSubmit.addEventListener("click", function() {
  let imgObj = {
    title: document.getElementById("form-title").value,
    url: document.getElementById("form-url").value,
    date: new Date()
  }
  localStorage.setItem(imgObj.title, JSON.stringify(imgObj));
  window.location.href = "/index.html";
});