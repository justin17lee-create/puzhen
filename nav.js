document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();

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
});
