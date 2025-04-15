const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 300,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 100,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".header__content h3", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 400,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".intro__image", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".intro__content .section__subheader", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".intro__content .section__header", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".intro__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".intro__grid", {
  ...scrollRevealOption,
  delay: 600,
});
ScrollReveal().reveal(".intro__content h4", {
  ...scrollRevealOption,
  delay: 600,
});
ScrollReveal().reveal(".intro__flex div", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 200,
});

ScrollReveal().reveal(".journey__grid > div > div", {
  ...scrollRevealOption,
  interval: 200,
});

const mixer = mixitup(".portfolio__grid");

ScrollReveal().reveal(".banner__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__content p", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".banner__btn", {
  ...scrollRevealOption,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 200,
});


// Contact Form

function openPopup() {
  document.getElementById("popupContact").style.display = "block";
}

function closePopup() {
  document.getElementById("popupContact").style.display = "none";
}

// Receiving Message From the F0rm

  const form = document.getElementById('contactForm');
  const statusText = document.getElementById('formStatus');

  form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent form from submitting immediately
  
    // Reset the status text before sending
    statusText.textContent = "";
  
    const formData = new FormData(form);
  
    try {
      const response = await fetch("https://formspree.io/f/xvgkyjgj", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
  
      if (response.ok) {
        statusText.textContent = "Message sent successfully!";
        statusText.style.color = "green";
        form.reset(); // Reset form after success
      } else {
        statusText.textContent = "Oops! Something went wrong.";
        statusText.style.color = "red";
      }
  
    } catch (error) {
      statusText.textContent = "Error sending message. Try again.";
      statusText.style.color = "red";
    }
  });
  