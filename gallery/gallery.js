
const galleryContainer = document.querySelector(".gallery-container");

console.log("Gallery container:", galleryContainer);

const galleryObject = [
  { id: 5, src: "../images/mylogo.png" },
  { id: 1, src: "../images/gallery3.png" },
  { id: 2, src: "../images/gallery2.png" },
  { id: 3, src: "../images/gallery4.png" },
  { id: 4, src: "../images/gallery5.png" },
  { id: 6, src: "../images/profile.png" }
];

function renderPhoto() {
  if (!galleryContainer) {
    alert("Gallery container not found");
    return;
  }

  galleryObject.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = "My picture";
    img.width = 300;
    img.height = 360;
    img.className = "photo";

    galleryContainer.appendChild(img);
  });
}

renderPhoto();
