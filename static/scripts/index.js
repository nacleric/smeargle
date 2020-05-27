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

  for (let i = 0; i < sortedArray.length; i++) {
    let item = sortedArray[i];
    let imgUrl = item.url;
    let imgTitle = item.title;
    let newElement = `
        <div class="gallery-photo-container">
          <a href="${imgUrl}">
            <img class="gallery-photo" src="${imgUrl}"></img>
          </a>
          <a class="delete-button"><i data-feather="x"></i></a>
          <p class="gallery-photo-title">${imgTitle}</p>
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
      let galleryPhotoContainer = button.parentElement;
      gallery.removeChild(galleryPhotoContainer)
      let titleTag = galleryPhotoContainer.childNodes[5].innerHTML;
      localStorage.removeItem(titleTag)
    })
  }
}

// function exportData() {
//   let exportButton = document.getElementById("export")
//   for (let i = 0; i < localStorage.length; i++) {
//     console.log("pass");
//     let key = localStorage.key(i);
    
//   }
// }

window.onload = function() {
  loadPhotos();
  bindDeleteToButtons();
  feather.replace()
}