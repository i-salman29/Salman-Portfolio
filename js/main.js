(function () {
  "use strict";

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  }

  // Mark the current section in the nav
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.removeAttribute("aria-current");
          if (a.getAttribute("href") === "#" + entry.target.id) a.setAttribute("aria-current", "true");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { io.observe(s); });
  }

  // Contact form: opens the visitor's email app with the message filled in.
  // To receive messages without an email app, swap this for a Formspree or Netlify Forms endpoint (see README).
  var form = document.getElementById("contact-form");
  var error = document.getElementById("form-error");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      var valid = name && message && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!valid) { error.hidden = false; return; }
      error.hidden = true;
      var subject = "Portfolio message from " + name;
      var body = message + "\n\n" + name + "\n" + email;
      window.location.href = "mailto:salmanismail070@gmail.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
})();
