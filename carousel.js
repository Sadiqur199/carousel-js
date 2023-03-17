const images = [
   
  "images/pic-1.jpg",
  "images/pic-2.jpg",
  "images/pic-3.jpg",
  "images/pic-4.jpg",
  "images/pic-5.jpg",
  "images/pic-6.jpg",
  "images/pic-7.jpg",
  "images/pic-8.jpg",
  'images/pic-9.jpg'
]

let imagesIndex = 0;
const imageId =  document.getElementById('slider-image');
 setInterval(() => {
  if(imagesIndex === images.length)
  {
    imagesIndex = 0
  }
 const image = images[imagesIndex]
 imageId.setAttribute('src',image)
  console.log(image,imagesIndex)
  imagesIndex++;
}, 1000);