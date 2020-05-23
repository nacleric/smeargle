function loadPhotos() {
  let gallery = document.getElementById("gallery");
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key !== "isDark") {
      try {
        let item = JSON.parse(localStorage.getItem(key));
        let imgUrl = item.url;
        console.log(imgUrl)
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
      } catch (error) {
        console.error(error);
      }
    }
  }
}

function bindDeleteToButtons() {
  let deleteButtons = document.querySelectorAll(".delete-button");
  for (let i = 0; i < deleteButtons.length; i++) {
    let button = deleteButtons[i]
    button.addEventListener("click", function() {
      let gallery = document.getElementById("gallery");
      let galleryPhotoContainer = button.parentElement;
      gallery.removeChild(galleryPhotoContainer)
      let titleTag = galleryPhotoContainer.childNodes[5].innerHTML;
      localStorage.removeItem(titleTag)
    })
  }
}

window.onload = function() {
  loadPhotos();
  bindDeleteToButtons();
  feather.replace()
}