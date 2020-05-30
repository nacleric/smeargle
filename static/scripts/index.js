function loadPhotos() {
  let unsortedArray = [];
  let gallery = document.querySelector("#gallery");
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key !== "isDark") {
      unsortedArray[i] = JSON.parse(localStorage.getItem(key));
    }
  }
  
  sortedArray = unsortedArray.sort((a, b) => (new Date(b.date) - new Date(a.date)));
  console.log(sortedArray)
  for (let i = 0; i < sortedArray.length-1; i++) {
    let item = sortedArray[i];
    let imgUrl = item.url;
    let imgTitle = item.title;
    let newElement = `
        <div class="gallery-photo-container">
          <a href="${imgUrl}">
            <img class="gallery-photo" src="${imgUrl}"></img>
          </a>
          <div class="gallery-photo-data">
            <p class="gallery-photo-title">${imgTitle}</p>
            <a class="gallery-photo-title delete-button">X</a>
          </div>
        </div>
    `
    gallery.innerHTML += newElement;
  }
}

function bindDeleteToButtons() {
  let deleteButtons = document.querySelectorAll(".delete-button");
  for (let i = 0; i < deleteButtons.length; i++) {
    let button = deleteButtons[i]
    button.addEventListener("click", function() {
      let gallery = document.querySelector("#gallery");
      let galleryPhotoContainer = button.parentElement.parentElement;
      let titleTag = galleryPhotoContainer.childNodes[3].childNodes[1].innerText;

      gallery.removeChild(galleryPhotoContainer)
      localStorage.removeItem(titleTag)
    })
  }
}

let exportButton = document.querySelector("#export");
exportButton.addEventListener("click", function() {
  const el = document.createElement("textarea");
  el.value = JSON.stringify(sortedArray);
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  exportButton.innerText = "Copied!"
  setTimeout(() => { 
    exportButton.innerText = "Export"
  }, 1000)
});


window.onload = function() {
  loadPhotos();
  bindDeleteToButtons();
  feather.replace()
}