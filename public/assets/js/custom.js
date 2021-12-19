"use strict";

// when input is focused add focused class for style
function focused(el) {
  if (el.parentElement.classList.contains("input-group")) {
    el.parentElement.classList.add("focused");
  }
}

// when input is focused remove focused class for style
function defocused(el) {
  if (el.parentElement.classList.contains("input-group")) {
    el.parentElement.classList.remove("focused");
  }
}

// helper for adding on all elements multiple attributes
function setAttributes(el, options) {
  Object.keys(options).forEach(function (attr) {
    el.setAttribute(attr, options[attr]);
  });
}

// adding on inputs attributes for calling the focused and defocused functions
if (document.querySelectorAll(".input-group").length != 0) {
  var allInputs = document.querySelectorAll("input.form-control");
  allInputs.forEach((el) =>
    setAttributes(el, {
      onfocus: "focused(this)",
      onfocusout: "defocused(this)",
    })
  );
}

window.onload = function () {
  // Material Design Input function
  var inputs = document.querySelectorAll("input");

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener(
      "focus",
      function (e) {
        this.parentElement.classList.add("is-focused");
      },
      false
    );

    inputs[i].onkeyup = function (e) {
      if (this.value != "") {
        this.parentElement.classList.add("is-filled");
      } else {
        this.parentElement.classList.remove("is-filled");
      }
    };

    inputs[i].addEventListener(
      "focusout",
      function (e) {
        if (this.value != "") {
          this.parentElement.classList.add("is-filled");
        }
        this.parentElement.classList.remove("is-focused");
      },
      false
    );
  }

  // Ripple Effect
  var ripples = document.querySelectorAll(".btn");

  for (var i = 0; i < ripples.length; i++) {
    ripples[i].addEventListener(
      "click",
      function (e) {
        var targetEl = e.target;
        var rippleDiv = targetEl.querySelector(".ripple");

        rippleDiv = document.createElement("span");
        rippleDiv.classList.add("ripple");
        rippleDiv.style.width = rippleDiv.style.height =
          Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + "px";
        targetEl.appendChild(rippleDiv);

        rippleDiv.style.left = e.offsetX - rippleDiv.offsetWidth / 2 + "px";
        rippleDiv.style.top = e.offsetY - rippleDiv.offsetHeight / 2 + "px";
        rippleDiv.classList.add("ripple");
        setTimeout(function () {
          rippleDiv.parentElement.removeChild(rippleDiv);
        }, 600);
      },
      false
    );
  }
};

// Light Mode / Dark Mode
function darkMode(el) {
  const body = document.getElementsByTagName("body")[0];
  const hr = document.querySelectorAll("div:not(.sidenav) > hr");
  const hr_card = document.querySelectorAll("div:not(.bg-gradient-dark) hr");
  const text_btn = document.querySelectorAll("button:not(.btn) > .text-dark");
  const text_span = document.querySelectorAll(
    "span.text-dark, .breadcrumb .text-dark"
  );
  const text_span_white = document.querySelectorAll(
    "span.text-white, .breadcrumb .text-white"
  );
  const text_strong = document.querySelectorAll("strong.text-dark");
  const text_strong_white = document.querySelectorAll("strong.text-white");
  const text_nav_link = document.querySelectorAll("a.nav-link.text-dark");
  const text_nav_link_white = document.querySelectorAll(
    "a.nav-link.text-white"
  );
  const secondary = document.querySelectorAll(".text-secondary");
  const bg_gray_100 = document.querySelectorAll(".bg-gray-100");
  const bg_gray_600 = document.querySelectorAll(".bg-gray-600");
  const btn_text_dark = document.querySelectorAll(
    ".btn.btn-link.text-dark, .material-icons.text-dark"
  );
  const btn_text_white = document.querySelectorAll(
    ".btn.btn-link.text-white, .material-icons.text-white"
  );
  const card_border = document.querySelectorAll(".card.border");
  const card_border_dark = document.querySelectorAll(
    ".card.border.border-dark"
  );

  const svg = document.querySelectorAll("g");

  if (!el.getAttribute("checked")) {
    body.classList.add("dark-version");
    for (var i = 0; i < hr.length; i++) {
      if (hr[i].classList.contains("dark")) {
        hr[i].classList.remove("dark");
        hr[i].classList.add("light");
      }
    }

    for (var i = 0; i < hr_card.length; i++) {
      if (hr_card[i].classList.contains("dark")) {
        hr_card[i].classList.remove("dark");
        hr_card[i].classList.add("light");
      }
    }
    for (var i = 0; i < text_btn.length; i++) {
      if (text_btn[i].classList.contains("text-dark")) {
        text_btn[i].classList.remove("text-dark");
        text_btn[i].classList.add("text-white");
      }
    }
    for (var i = 0; i < text_span.length; i++) {
      if (text_span[i].classList.contains("text-dark")) {
        text_span[i].classList.remove("text-dark");
        text_span[i].classList.add("text-white");
      }
    }
    for (var i = 0; i < text_strong.length; i++) {
      if (text_strong[i].classList.contains("text-dark")) {
        text_strong[i].classList.remove("text-dark");
        text_strong[i].classList.add("text-white");
      }
    }
    for (var i = 0; i < text_nav_link.length; i++) {
      if (text_nav_link[i].classList.contains("text-dark")) {
        text_nav_link[i].classList.remove("text-dark");
        text_nav_link[i].classList.add("text-white");
      }
    }
    for (var i = 0; i < secondary.length; i++) {
      if (secondary[i].classList.contains("text-secondary")) {
        secondary[i].classList.remove("text-secondary");
        secondary[i].classList.add("text-white");
        secondary[i].classList.add("opacity-8");
      }
    }
    for (var i = 0; i < bg_gray_100.length; i++) {
      if (bg_gray_100[i].classList.contains("bg-gray-100")) {
        bg_gray_100[i].classList.remove("bg-gray-100");
        bg_gray_100[i].classList.add("bg-gray-600");
      }
    }
    for (var i = 0; i < btn_text_dark.length; i++) {
      btn_text_dark[i].classList.remove("text-dark");
      btn_text_dark[i].classList.add("text-white");
    }
    for (var i = 0; i < svg.length; i++) {
      if (svg[i].hasAttribute("fill")) {
        svg[i].setAttribute("fill", "#fff");
      }
    }
    for (var i = 0; i < card_border.length; i++) {
      card_border[i].classList.add("border-dark");
    }
    el.setAttribute("checked", "true");
  } else {
    body.classList.remove("dark-version");
    for (var i = 0; i < hr.length; i++) {
      if (hr[i].classList.contains("light")) {
        hr[i].classList.add("dark");
        hr[i].classList.remove("light");
      }
    }
    for (var i = 0; i < hr_card.length; i++) {
      if (hr_card[i].classList.contains("light")) {
        hr_card[i].classList.add("dark");
        hr_card[i].classList.remove("light");
      }
    }
    for (var i = 0; i < text_btn.length; i++) {
      if (text_btn[i].classList.contains("text-white")) {
        text_btn[i].classList.remove("text-white");
        text_btn[i].classList.add("text-dark");
      }
    }
    for (var i = 0; i < text_span_white.length; i++) {
      if (
        text_span_white[i].classList.contains("text-white") &&
        !text_span_white[i].closest(".sidenav") &&
        !text_span_white[i].closest(".card.bg-gradient-dark")
      ) {
        text_span_white[i].classList.remove("text-white");
        text_span_white[i].classList.add("text-dark");
      }
    }
    for (var i = 0; i < text_strong_white.length; i++) {
      if (text_strong_white[i].classList.contains("text-white")) {
        text_strong_white[i].classList.remove("text-white");
        text_strong_white[i].classList.add("text-dark");
      }
    }
    for (var i = 0; i < text_nav_link_white.length; i++) {
      if (
        text_nav_link_white[i].classList.contains("text-white") &&
        !text_nav_link_white[i].closest(".sidenav")
      ) {
        text_nav_link_white[i].classList.remove("text-white");
        text_nav_link_white[i].classList.add("text-dark");
      }
    }
    for (var i = 0; i < secondary.length; i++) {
      if (secondary[i].classList.contains("text-white")) {
        secondary[i].classList.remove("text-white");
        secondary[i].classList.remove("opacity-8");
        secondary[i].classList.add("text-dark");
      }
    }
    for (var i = 0; i < bg_gray_600.length; i++) {
      if (bg_gray_600[i].classList.contains("bg-gray-600")) {
        bg_gray_600[i].classList.remove("bg-gray-600");
        bg_gray_600[i].classList.add("bg-gray-100");
      }
    }
    for (var i = 0; i < svg.length; i++) {
      if (svg[i].hasAttribute("fill")) {
        svg[i].setAttribute("fill", "#252f40");
      }
    }
    for (var i = 0; i < btn_text_white.length; i++) {
      if (!btn_text_white[i].closest(".card.bg-gradient-dark")) {
        btn_text_white[i].classList.remove("text-white");
        btn_text_white[i].classList.add("text-dark");
      }
    }
    for (var i = 0; i < card_border_dark.length; i++) {
      card_border_dark[i].classList.remove("border-dark");
    }
    el.removeAttribute("checked");
  }
}
