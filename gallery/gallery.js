
const galleryContainer = document.querySelector(".gallery-container");
const galleryObject = [
     {id:5,src:"../images/mylogo.png"},
     {id:1,src:"../images/gallery3.png"},
     {id:2,src:"../images/gallery2.png"},
     {id:3,src:"../images/gallery4.png"},
     {id:4,src:"../images/gallery5.png"},
     {id:6,src:"../images/profile.png"}

];

    function renderPhoto(){
    galleryContainer.innerHTML = "";
     galleryObject.forEach((photo) =>{
      const html= `<img alt="my picture"  height="360px"  width="300px" class="photo" src="${photo.src}">`
     const div = document.createElement("div");
      div.innerHTML = html;
      galleryContainer.appendChild(div);
})
}

renderPhoto();
