document.addEventListener("DOMContentLoaded", () => {

  // صفحة تاريخ الميلاد
  const form = document.getElementById("birthday-form");

  if (form) {
    const input = document.getElementById("birthday");
    const message = document.getElementById("message");

    // تنسيق التاريخ تلقائيًا
    input.addEventListener("input", () => {
      let digits = input.value
        .replace(/\D/g, "")
        .slice(0, 8);

      if (digits.length > 4) {
        digits =
          digits.slice(0, 2) + "/" +
          digits.slice(2, 4) + "/" +
          digits.slice(4);
      } else if (digits.length > 2) {
        digits =
          digits.slice(0, 2) + "/" +
          digits.slice(2);
      }

      input.value = digits;
    });

    // التحقق من التاريخ
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (input.value.trim() === "26/11/2005") {
        message.textContent =
          "صح كده! المفاجأة مستنياكي ❤️";

        setTimeout(() => {
          window.location.href = "home.html";
        }, 600);

      } else {
        message.textContent =
          "جرّبي تاني واكتبي التاريخ صح ❤️";
      }
    });
  }

  // صفحة الهدية
  const gift = document.getElementById("gift-box");

  if (gift) {
    gift.addEventListener("click", () => {
      gift.classList.add("open");

      document.getElementById("gift-message").textContent =
        "المفاجأة جاهزة! ❤️";

      document.getElementById("ring-link")
        .classList.remove("hidden");

      gift.setAttribute("aria-label", "تم فتح الهدية");
    });
  }

});