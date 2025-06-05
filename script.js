
document.getElementById('quoteForm').addEventListener('submit', function (e) {
  const nameInput = document.querySelector('input[placeholder="Ваше имя"]');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

  let nameError = document.getElementById('nameError');
  if (!nameError) {
    nameError = document.createElement('div');
    nameError.id = 'nameError';
    nameError.className = 'error';
    nameInput.insertAdjacentElement('afterend', nameError);
  }

  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');

  let valid = true;

  if (!nameInput.value.trim()) {
    nameError.textContent = "Введите Ваше имя";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  if (!email.value.trim()) {
    emailError.textContent = "Введите адрес электронной почты";
    valid = false;
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      emailError.textContent = "Неккоректный адрес электронной почты";
      valid = false;
    } else {
      emailError.textContent = "";
    }
  }

  if (!phone.value.trim()) {
    phoneError.textContent = "Введите номер телефона";
    valid = false;
  } else {
    const cleanedPhone = phone.value.replace(/[^\d+]/g, '');
    if (
      !(cleanedPhone.length === 11 && cleanedPhone.startsWith('8')) &&
      !(cleanedPhone.length === 12 && cleanedPhone.startsWith('+7'))
    ) {
      phoneError.textContent = "Некорректный номер телефона";
      valid = false;
    } else {
      phoneError.textContent = "";
    }
  }

  if (!valid) {
    e.preventDefault();
  }
});

document.getElementById('phone').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^\d\s\-+]/g, '');
});


document.getElementById("logo").addEventListener("mouseenter", () => {
  for (let i = 0; i < 10; i++) {
    const star = document.createElement("div");
    star.textContent = "⭐";
    star.className = "star";

    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 200 + 60;
    const x = Math.cos(angle) * radius + "px";
    const y = Math.sin(angle) * radius + "px";

    star.style.setProperty("--x", x);
    star.style.setProperty("--y", y);

    star.style.left = document.getElementById("logo").offsetLeft + 30 + "px";
    star.style.top = document.getElementById("logo").offsetTop + "px";

    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 1000);
  }
});
const burgerBtn = document.getElementById('burgerBtn');
const navlinks = document.getElementById('nav-links');

burgerBtn.addEventListener('click', () => {
  navlinks.classList.toggle('active');
});