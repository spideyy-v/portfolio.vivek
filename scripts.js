const toggleBtn = document.getElementById('themeToggle');
  const icon = toggleBtn.querySelector('i');
  toggleBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    icon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  });
  
  function scrollToContact() {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
  }
