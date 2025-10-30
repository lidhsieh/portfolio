document.addEventListener("DOMContentLoaded", async () => {
  const navbarContainer = document.getElementById("navbar");
  if (!navbarContainer) return;

  // 載入 Navbar.html
  const response = await fetch("navbar.html");
  const html = await response.text();
  navbarContainer.innerHTML = html;

  // 等 innerHTML 插入後再抓 DOM
  const burger = document.getElementById("sidebar-toggle");
  const sidebar = document.getElementById("sidebar");

  if (burger && sidebar) {
    burger.addEventListener("click", (e) => {
      sidebar.classList.toggle("show");
      e.stopPropagation();
    });

    sidebar.addEventListener("click", (e) => e.stopPropagation());

    document.addEventListener("click", () => {
      sidebar.classList.remove("show");
    });
  }
});


// footer
const footer = document.createElement('footer');
footer.className = 'footer px-5 py-2';
footer.innerHTML = '<p>LidHsieh 2025</p>';
document.body.appendChild(footer);