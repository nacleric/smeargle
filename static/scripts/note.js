function isUrl(word) {
  try {
    const url = new URL(word.startsWith('http') ? word : 'http://' + word);
    return !!url.hostname;
  } catch (_) {
    return false;
  }
}

function linkifySentence(sentence) {
  return sentence
    .split(/\s+/) // split by spaces
    .map(word => {
      if (isUrl(word)) {
        const href = word.startsWith('http') ? word : `http://${word}`;
        return `<a href="${href}" target="_blank">${word}</a>`;
      }
      return word;
    })
    .join(' ');
}

// Get the full query string from the URL (e.g., ?id=1)
let queryString = window.location.search;

// Use URLSearchParams to parse the query string
let urlParams = new URLSearchParams(queryString);

// Get the 'id' parameter from the URL
let key = urlParams.get("id");

let foo = JSON.parse(localStorage.getItem(key))
console.log(foo)

let noteTitle = document.querySelector(".note-title")
let notePhoto = document.querySelector(".note-photo")
let noteOther = document.querySelector(".note-other")
// Dynamically set the image source based on the ID
notePhoto.setAttribute('src', foo.url); // Assuming you have photos like photo1.jpg, photo2.jpg
noteTitle.textContent = foo.title
noteOther.innerHTML = linkifySentence(foo.other)