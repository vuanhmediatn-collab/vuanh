const CONTACT_EMAIL = "hello@vuanhmedia.vn";

const header = document.querySelector("[data-header]");
const nav = document.querySelector("#site-nav");
const navToggle = document.querySelector(".nav-toggle");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const productFilterButtons = Array.from(document.querySelectorAll("[data-products-filter]"));
const productCards = Array.from(document.querySelectorAll("[data-product-category]"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeNav() {
  if (!nav || !navToggle) return;
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const company = String(formData.get("company") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const need = String(formData.get("need") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `Trao đổi dự án media - ${company || "Doanh nghiệp"}`;
    const body = [
      "Xin chào VŨ ANH MEDIA,",
      "",
      "Doanh nghiệp muốn đặt lịch trao đổi về dự án media.",
      "",
      `Tên doanh nghiệp: ${company}`,
      `Người liên hệ: ${name}`,
      `Email / số điện thoại: ${contact}`,
      `Nhu cầu hiện tại: ${need}`,
      "",
      "Mô tả ngắn:",
      message || "Chưa cung cấp.",
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    if (formNote) {
      formNote.textContent = "Email đã được tạo từ nội dung brief. Vui lòng kiểm tra ứng dụng email mặc định.";
    }
  });
}

function setupProductFilters() {
  if (!productFilterButtons.length || !productCards.length) return;

  productFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.productsFilter || "all";

      productFilterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      productCards.forEach((card) => {
        const shouldShow = filter === "all" || card.dataset.productCategory === filter;
        card.hidden = !shouldShow;
      });
    });
  });
}

function setupScrollReveal() {
  if (prefersReducedMotion.matches) return;

  const revealSelectors = [
    ".capability-band",
    ".philosophy-grid",
    ".principle-card",
    ".services-section .section-heading",
    ".service-row",
    ".portfolio-intro",
    ".project-card",
    ".product-intro",
    ".product-toolbar",
    ".product-card",
    ".process-layout .section-heading",
    ".process-timeline li",
    ".founder-image",
    ".founder-copy",
    ".founder-metrics span",
    ".contact-box",
  ];

  const revealItems = revealSelectors.flatMap((selector) =>
    Array.from(document.querySelectorAll(selector))
  );

  if (!revealItems.length) return;

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  revealItems.forEach((item, index) => {
    const delay = item.matches(".contact-box") ? 180 : Math.min((index % 4) * 90, 270);
    item.classList.add("reveal");
    item.style.setProperty("--reveal-delay", `${delay}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.16,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

setHeaderState();
setupProductFilters();
setupScrollReveal();
window.addEventListener("scroll", setHeaderState, { passive: true });
