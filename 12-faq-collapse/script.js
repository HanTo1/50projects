const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach((faqToggle, index) => {
  faqToggle.addEventListener("click", () => {
    faqToggle.parentNode.classList.toggle('active');
  })
})
