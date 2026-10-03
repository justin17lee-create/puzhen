<script>
document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();

  // ⭐ 修复首页路径
  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  const navHTML = `
    <nav class="nav">
      <a href="index.html" data-page="index.html">Home</a>
      <a href="about.html" data-page="about.html">About</a>
      <a href="portfolio.html" data-page="portfolio.html">Portfolio</a>
      <a href="contact.html" data-page="contact.html">Contact</a>
    </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", navHTML);

  // ⭐ 自动加 active
  document.querySelectorAll(".nav a").forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
  });


  // ⭐ Deep End 图片 Gallery
  const galleryMainImg = document.getElementById("gallery-main-img");
  const galleryThumbs = document.querySelectorAll(".gallery-thumb");

  if (galleryMainImg && galleryThumbs.length) {
    galleryThumbs.forEach(thumb => {
      thumb.addEventListener("click", function () {
        const newImage = this.dataset.image;

        galleryMainImg.style.opacity = "0";

        setTimeout(() => {
          galleryMainImg.src = newImage;
          galleryMainImg.style.opacity = "1";
        }, 150);

        galleryThumbs.forEach(item => {
          item.classList.remove("active");
        });

        this.classList.add("active");
      });
    });
  }

  
const galleryPrev = document.getElementById("gallery-prev");
const galleryNext = document.getElementById("gallery-next");

let currentGalleryIndex = 0;

function showGalleryImage(index) {
  if (index < 0) {
    index = galleryThumbs.length - 1;
  }

  if (index >= galleryThumbs.length) {
    index = 0;
  }

  const thumb = galleryThumbs[index];
  const newImage = thumb.dataset.image;

  galleryMainImg.style.opacity = "0";

  setTimeout(() => {
    galleryMainImg.src = newImage;
    galleryMainImg.style.opacity = "1";
  }, 150);

  galleryThumbs.forEach(item => {
    item.classList.remove("active");
  });

  thumb.classList.add("active");

  currentGalleryIndex = index;
}

galleryPrev.addEventListener("click", function (e) {
  e.stopPropagation();
  showGalleryImage(currentGalleryIndex - 1);
});

galleryNext.addEventListener("click", function (e) {
  e.stopPropagation();
  showGalleryImage(currentGalleryIndex + 1);
});

galleryThumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", function () {
    currentGalleryIndex = index;
  });
});
