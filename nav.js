document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();

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

  document.querySelectorAll(".nav a").forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
  });
});
