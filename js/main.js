document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Mobile nav ---------- */
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.body.classList.remove("nav-open");
    });
  });

  /* ---------- Booking total calculator + demo submit ---------- */
  var bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    var qtyInputs = bookingForm.querySelectorAll(".qty");
    var totalEl = document.getElementById("totalAmount");

    function updateTotal() {
      var total = 0;
      qtyInputs.forEach(function (input) {
        var price = parseFloat(input.dataset.price) || 0;
        var qty = parseInt(input.value, 10) || 0;
        if (qty > 0) total += price * qty;
      });
      totalEl.textContent = "\u20B9" + total;
    }

    qtyInputs.forEach(function (input) {
      input.addEventListener("input", updateTotal);
    });
    updateTotal();

    var dateInput = bookingForm.querySelector("#visit_date");
    if (dateInput) {
      var today = new Date().toISOString().split("T")[0];
      dateInput.min = today;
    }

    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var ref =
        "ZIS-" +
        Date.now().toString().slice(-6) +
        "-" +
        Math.random().toString(36).slice(2, 7).toUpperCase();
      var name = (bookingForm.querySelector("#name").value || "").trim();
      var date = dateInput ? dateInput.value : "";
      var total = totalEl.textContent;
      var card = bookingForm.closest(".form-card");
      card.innerHTML =
        '<div class="success-mark">\u2705</div>' +
        '<h3 class="center">Booking Confirmed</h3>' +
        '<p class="center muted">Thank you, ' +
        (name || "guest") +
        "! Please show your reference number at the entrance.</p>" +
        '<div class="ticket"><div class="ticket-head"><span>Booking Reference</span><strong>' +
        ref +
        "</strong></div>" +
        '<div class="ticket-body">' +
        '<div class="ticket-row"><span>Visit Date</span><strong>' +
        (date || "\u2014") +
        "</strong></div>" +
        '<div class="ticket-row total"><span>Total</span><strong>' +
        total +
        "</strong></div></div></div>" +
        '<a href="index.html" class="btn btn-primary btn-block">Back to Home</a>';
    });
  }

  /* ---------- Demo forms (contact / adopt / newsletter) ---------- */
  document.querySelectorAll(".js-demo-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg =
        form.dataset.success ||
        "Thank you! Your submission has been received.";
      if (form.classList.contains("newsletter-form")) {
        form.innerHTML = '<span style="color:#fff">' + msg + "</span>";
      } else {
        var card = form.closest(".form-card") || form.parentElement;
        card.innerHTML =
          '<div class="success-mark">\u2705</div>' +
          '<h3 class="center">Thank you!</h3>' +
          '<p class="center muted">' +
          msg +
          "</p>" +
          '<a href="index.html" class="btn btn-primary btn-block">Back to Home</a>';
      }
    });
  });

  /* ---------- Gallery category filter ---------- */
  var galleryGrid = document.getElementById("galleryGrid");
  if (galleryGrid) {
    var chips = document.querySelectorAll(".filter-bar .chip");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) {
          c.classList.remove("active");
        });
        chip.classList.add("active");
        var filter = chip.dataset.filter;
        galleryGrid
          .querySelectorAll(".gallery-item")
          .forEach(function (item) {
            var show =
              filter === "all" || item.dataset.category === filter;
            item.style.display = show ? "" : "none";
          });
      });
    });
  }
});
