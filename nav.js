document.addEventListener("DOMContentLoaded", function () {
  const navHTML = `
    <nav class="nav">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="portfolio.html">Portfolio</a>
      <a href="contact.html">Contact</a>
    </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", navHTML);
});
