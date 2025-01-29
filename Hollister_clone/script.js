const navItems = document.querySelectorAll(".gilly .hicks");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class from all items
    navItems.forEach((nav) => nav.classList.remove("active"));
    // Add active class to the clicked item
    item.classList.add("active");
  });
});

const searchIcon = document.querySelector(".a-icon");
searchIcon.addEventListener("click", () => {
  const searchQuery = prompt("Enter your search query:");
  if (searchQuery) {
    alert(`You searched for: ${searchQuery}`);
  } else {
    alert("Search query cannot be empty.");
  }
});

const favoriteIcon = document.querySelector(".b-icon");
favoriteIcon.addEventListener("click", () => {
  favoriteIcon.classList.toggle("active");
  alert("Item added to your favorites!");
});

// Shopping cart count functionality
const cartIcon = document.querySelector(".c-icon");
let cartCount = 0;
cartIcon.addEventListener("click", () => {
  cartCount++;
  alert(`You have ${cartCount} items in your cart.`);
});

// Shop buttons in the panel section
const shopWomenBtn = document.querySelector(".shop");
const shopMenBtn = document.querySelector(".men");

shopWomenBtn.addEventListener("click", () => {
  alert("Redirecting to Women's Shop...");
});

shopMenBtn.addEventListener("click", () => {
  alert("Redirecting to Men's Shop...");
});

// Scroll to sections based on navigation items
document.getElementById("home").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.getElementById("women").addEventListener("click", () => {
  window.scrollTo({ top: 600, behavior: "smooth" });
});
document.getElementById("men").addEventListener("click", () => {
  window.scrollTo({ top: 1200, behavior: "smooth" });
});
document.getElementById("jeans").addEventListener("click", () => {
  window.scrollTo({ top: 1800, behavior: "smooth" });
});
document.getElementById("activewear").addEventListener("click", () => {
  window.scrollTo({ top: 2400, behavior: "smooth" });
});
document.getElementById("sale").addEventListener("click", () => {
  window.scrollTo({ top: 3000, behavior: "smooth" });
});
document.getElementById("purpose").addEventListener("click", () => {
  window.scrollTo({ top: 3600, behavior: "smooth" });
});

// Add hover effect for the UNiDAYS section
const unidaysSection = document.querySelector(".fourth-body");
unidaysSection.addEventListener("mouseenter", () => {
  unidaysSection.style.backgroundColor = "rgba(200, 200, 255, 0.8)";
});
unidaysSection.addEventListener("mouseleave", () => {
  unidaysSection.style.backgroundColor = "rgba(178, 173, 173, 0.5)";
});
