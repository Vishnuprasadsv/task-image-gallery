document.addEventListener("DOMContentLoaded", () => {
  // Adding all the elements to the script
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const frontView = document.getElementById("frontView");
  const galleryView = document.getElementById("galleryView");

  // converting all the images in the images folder in a variable as array
  const imageArray = [
    "Images/image1.jpg",
    "Images/image2.jpg",
    "Images/image3.jpg",
    "Images/image4.jpg",
    "Images/image5.jpg",
    "Images/image6.jpg",
    "Images/image7.jpg",
    "Images/image8.jpg",
    "Images/image9.jpg",
    "Images/image11.jpg",
    "Images/image12.jpg"
  ];

  // creating empty array
  let galleryImages = [];
  // first index value
  let firstIndex = 0;

  // console.log(imageArray.length);

  const initGallery = () => {
    // Creating each image from the image array
    imageArray.forEach((src) => {
      // creating an element for the images
      const item = document.createElement("div");
      // adding class for the element
      item.className = "gallery-images";
      // adding image tag inside the div tag
      const img = document.createElement("img");
      // adding src
      img.src = src;
      img.alt = "Gallery Image";

      item.appendChild(img);
      galleryView.appendChild(item);
    });

    // adding all created elementt in the empty array with a classname of gallery-images
    galleryImages = document.querySelectorAll(".gallery-images");

    // Seting the first image
    firstIndex = 0;

    updateGallery(true);
  };

  const updateGallery = (instant = false) => {
    // checking if there is no image then exit
    if (galleryImages.length === 0) return;

    // adding index of images in a variable
    const activeItem = galleryImages[firstIndex];

    // calculation to make it center
    const offset =
      frontView.offsetWidth / 2 -
      activeItem.offsetLeft -
      activeItem.offsetWidth / 2;

    // adding and removing of transition effect
    if (instant) {
      galleryView.classList.add("transitionnone");
    } else {
      galleryView.classList.remove("transitionnone");
    }

    // Apply the transform to slide the galleryView
    galleryView.style.transform = `translateX(${offset}px)`;

    // Updating the active class
    galleryImages.forEach((item, index) => {
      if (index === firstIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };
  // adding button click event
  nextBtn.addEventListener("click", () => {
    firstIndex++;
    // when clicked after last image back to the first one
    if (firstIndex >= galleryImages.length) {
      firstIndex = 0;
    }
    updateGallery();
  });
  prevBtn.addEventListener("click", () => {
    firstIndex--;
    // getting the last image when the first image is at display
    if (firstIndex < 0) {
      firstIndex = galleryImages.length - 1;
    }
    updateGallery();
  });

  // re calculating on window size for centering
  window.addEventListener("resize", () => {
    // Updating immedietly
    updateGallery(true);
  });

  // calling the function
  initGallery();
});
