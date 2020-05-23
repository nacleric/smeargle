function loadPhotos() {
  let gallery = document.getElementById("gallery");
  for (key in localStorage) {
    let item = JSON.parse(localStorage.getItem(key));
    let imgUrl = item.url;
    let imgTitle = item.title;
    console.log(key)
    if (key !== "isDark") {
      let newElement = `
        <div>
          <a href="${imgUrl}"><img class="gallery-photo" src="${imgUrl}"></img></a>
          <p>${imgTitle}</p>
          <button class="delete-button">Delete</button>
        </div>
      `
      gallery.innerHTML += newElement;
    }
  }
}

let deleteBtn = document.querySelectorAll(".delete-button");
for (let i = 0; i < deleteBtn.length; i++) {
  console.log("ree")
  deleteBtn[i].addEventListener("click", () => {
    let element = deleteBtn[i].parentElement
    let item = element.lastElementChild.innerText
    localStorage.removeItem(item)
    element.remove()    
  })
}


loadPhotos()