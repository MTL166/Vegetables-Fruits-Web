/* === 鲜野集 Fresh Field — Component Interactions === */

document.addEventListener("DOMContentLoaded", function () {

  /* ===========================================
     Quantity Stepper
     =========================================== */

  document.querySelectorAll(".quantity-stepper").forEach(function (stepper) {
    var btnMinus = stepper.querySelector(".quantity-btn.minus");
    var btnPlus  = stepper.querySelector(".quantity-btn.plus");
    var input     = stepper.querySelector(".quantity-input");

    if (!btnMinus || !btnPlus || !input) return;

    var min = parseInt(input.getAttribute("min")) || 1;
    var max = parseInt(input.getAttribute("max")) || 99;

    function updateState() {
      var val = parseInt(input.value) || min;
      btnMinus.disabled = val <= min;
      btnPlus.disabled  = val >= max;
    }

    btnMinus.addEventListener("click", function () {
      var val = parseInt(input.value) || min;
      if (val > min) {
        input.value = val - 1;
        updateState();
      }
    });

    btnPlus.addEventListener("click", function () {
      var val = parseInt(input.value) || min;
      if (val < max) {
        input.value = val + 1;
        updateState();
      }
    });

    input.addEventListener("input", function () {
      var val = parseInt(input.value);
      if (isNaN(val) || val < min) input.value = min;
      if (val > max) input.value = max;
      updateState();
    });

    input.addEventListener("blur", function () {
      if (!input.value || parseInt(input.value) < min) input.value = min;
      updateState();
    });

    updateState();
  });

  /* ===========================================
     Add to Cart Feedback
     =========================================== */

  document.querySelectorAll(".btn-add-cart").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      var originalText = btn.textContent;
      btn.textContent = "已加入 ✓";
      btn.classList.add("btn-primary");
      btn.classList.remove("btn-outline");
      btn.disabled = true;

      setTimeout(function () {
        btn.textContent = originalText;
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline");
        btn.disabled = false;
      }, 1500);
    });
  });

  /* ===========================================
     Tab Panel
     =========================================== */

  document.querySelectorAll(".tab-nav .tab-label").forEach(function (tab) {
    tab.addEventListener("click", function () {
      var panel = this.closest(".tab-panel");
      var targetId = this.getAttribute("data-tab");

      panel.querySelectorAll(".tab-label").forEach(function (t) {
        t.classList.remove("active");
      });
      this.classList.add("active");

      panel.querySelectorAll(".tab-content").forEach(function (content) {
        content.classList.remove("active");
      });

      var target = panel.querySelector(".tab-content[data-tab='" + targetId + "']");
      if (target) {
        target.classList.add("active");
      }
    });
  });

  /* ===========================================
     Image Gallery Thumbnail Switcher
     =========================================== */

  document.querySelectorAll(".image-gallery").forEach(function (gallery) {
    var mainImg   = gallery.querySelector(".gallery-main img");
    var thumbs    = gallery.querySelectorAll(".gallery-thumb");
    var defaultSrc = mainImg ? mainImg.getAttribute("src") : "";

    thumbs.forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        var fullSrc = this.getAttribute("data-full");
        if (mainImg && fullSrc) {
          mainImg.setAttribute("src", fullSrc);
        }
        thumbs.forEach(function (t) { t.classList.remove("active"); });
        this.classList.add("active");
      });
    });
  });

});
