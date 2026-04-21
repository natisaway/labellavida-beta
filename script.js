// =========================
// SIDEBAR TOGGLE
// =========================
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (!sidebar || !overlay) {
    return;
  }

  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
}

// =========================
// CONTACT MODAL
// =========================
function openContactModal() {
  const modal = document.getElementById("contactModal");
  const form = document.getElementById("contactForm");
  const success = document.getElementById("contactSuccess");

  if (!modal) {
    return;
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  if (form) {
    form.style.display = "flex";
    form.reset();
  }

  if (success) {
    success.style.display = "none";
  }
}

function closeContactModal() {
  const modal = document.getElementById("contactModal");

  if (!modal) {
    return;
  }

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

// =========================
// VOLUNTEER MODAL
// =========================
function openVolunteerModal() {
  const modal = document.getElementById("volunteerModal");
  const form = document.getElementById("volunteerForm");
  const success = document.getElementById("volunteerSuccess");

  if (!modal) {
    return;
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  if (form) {
    form.style.display = "flex";
    form.reset();
  }

  if (success) {
    success.style.display = "none";
  }
}

function closeVolunteerModal() {
  const modal = document.getElementById("volunteerModal");

  if (!modal) {
    return;
  }

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

// =========================
// DOM READY EVENTS
// =========================
document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".sidebar-nav a");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const backToTop = document.getElementById("backToTop");

  const contactForm = document.getElementById("contactForm");
  const contactSuccess = document.getElementById("contactSuccess");

  const volunteerForm = document.getElementById("volunteerForm");
  const volunteerSuccess = document.getElementById("volunteerSuccess");

  // CLOSE SIDEBAR WHEN CLICKING A LINK
  sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (sidebar) {
        sidebar.classList.remove("open");
      }

      if (overlay) {
        overlay.classList.remove("show");
      }
    });
  });

  // BACK TO TOP BUTTON
  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // CLOSE MODALS WITH ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeContactModal();
      closeVolunteerModal();
    }
  });

  // CONTACT FORM SUBMIT
  if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {
          contactForm.reset();
          contactForm.style.display = "none";

          if (contactSuccess) {
            contactSuccess.style.display = "block";
          }
        } else {
          alert("There was a problem submitting the form. Please try again.");
        }
      } catch (error) {
        alert("There was a problem submitting the form. Please try again.");
      }
    });
  }

  // VOLUNTEER FORM SUBMIT
  if (volunteerForm) {
    volunteerForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const formData = new FormData(volunteerForm);

      try {
        const response = await fetch(volunteerForm.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {
          volunteerForm.reset();
          volunteerForm.style.display = "none";

          if (volunteerSuccess) {
            volunteerSuccess.style.display = "block";
          }
        } else {
          alert("There was a problem submitting the form. Please try again.");
        }
      } catch (error) {
        alert("There was a problem submitting the form. Please try again.");
      }
    });
  }
});