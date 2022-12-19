/* mouseover and mouseout events*/

function setNewImage () {
  document.getElementById("img1").src ="newimages/image1.png";
  document.getElementById("img2").src ="newimages/image2.png";
  document.getElementById("img3").src ="newimages/image3.png";
  document.getElementById("img4").src ="newimages/image4.png";
  document.getElementById("img5").src ="newimages/image5.png";
}

function setOldImage () {
  document.getElementById("img1").src ="images/image1.svg";
  document.getElementById("img2").src ="images/image2.svg";
  document.getElementById("img3").src ="images/image3.svg";
  document.getElementById("img4").src ="images/image3.svg";
  document.getElementById("img5").src ="images/image4.svg";
}


/* same thing but with using " one function and a condition ":

var images = document.querySelectorAll(".photo-grid-item"); 
var imgs = document.querySelectorAll(".img");

for (let i = 0; i < imgs.length; i++)
  imgs[i].addEventListener('mouseover', function () {
    this.textContent = "images/image" + (i + 1) + ".png;
  });
 */
